
const actors = [];

const player = JSON.parse(localStorage.getItem('player'));
const monster = JSON.parse(localStorage.getItem('enemy'));;

actors[0] = player;
actors[1] = monster;



let whosTurn = 0;

prepActors();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function roll() {
    return getRandomInt(10) + getRandomInt(10) + 1;
}


function prepActors() {
    player.str = Number.parseInt(player.str);
    player.def = Number.parseInt(player.def);
    player.dex = Number.parseInt(player.dex);

    monster.str = Number.parseInt(monster.str);
    monster.def = Number.parseInt(monster.def);
    monster.dex = Number.parseInt(monster.dex);
}


let rolls = [];



function whoStartsFirst() {
    
    let playerScore = 0;
    let monsterScore = 0;

    while (playerScore === monsterScore) {
        rolls[0] = roll();
        rolls[1] = roll();

        playerScore = rolls[0] + player.dex;
        monsterScore = rolls[1] + monster.dex;
    }

    whosTurn = (playerScore > monsterScore) ? 0 : 1; 
}






function turn() {
    actorHit(rolls[whosTurn]);
    whosTurn = !whosTurn;
    if(actors[whosTurn].life <= 0) {
        if(whosTurn === 0) {
            //game over
        }
        else {
            //reward player
            rewardPlayer();
            //remove monster from list
            //battle over
        }
    }
}

function rewardPlayer() {
    player.currentGold += monster.goldReward;
    player.currentXP += monster.xpReward;
    if(player.currentXP >= 1000) {
        player.currentXP -= 1000;
        player.lvl++;
    }
}
function gameOver() {
    localStorage.clear();
    window.location = '../html/index.html'
}


function actorHit(score) {
    let actorScore;
    actorScore = (score + actors[whosTurn].str) * actors[whosTurn].lvl;
    actorScore -= actors[!whosTurn].def;
    if(actorScore > 0)
        actors[!whosTurn].life -= actorScore;
}

// function monsterHit(score) {
//     //player life
//     let monsterScore;
//     monsterScore = (score + monster.str) * monster.lvl;
//     monsterScore -= player.def;
//     player.life -= monsterScore;
// }

// function playerHit(score) {
//     let playerScore;
//     playerScore = (score + player.str) * player.lvl;
//     playerScore -= monster.def;
//     monster.life -= playerScore;
// }

//objects
const monsterCard = document.querySelector('#monster-card');
const monsterName = document.querySelector('#monster-name');
const monsterImage = document.querySelector('#monster-image');
const monsterLife = document.querySelector('#monster-health');
const monsterXP = document.querySelector('#monster-xp');
const monsterLevel = document.querySelector('#monster-level');

//buttons
const attack = document.querySelector('#attack');
const drinkPotion = document.querySelector('#drink-potion');
const runAway = document.querySelector('#run-away')



const playerCard = document.querySelector('#player-card');
const playerName = document.querySelector('#player-name');
const playerImage = document.querySelector('#player-image');
const playerLife = document.querySelector('#player-health');
const playerXP = document.querySelector('#player-xp');
const playerLevel = document.querySelector('#player-level');


function displayPlayer() {
    playerName.innerText = player.name;
    playerImage.src = `../imgs/02caracters/img-${player.image}.png`;
    playerLife.innerText = player.life;
    playerXP.innerText = player.currentXP;
    playerLevel.innerText = player.lvl;
}

function displayMonster() {
    monsterName.innerText = monster.name;
    monsterImage.src = `../imgs/monsters/img-${monster.image}.png`;
    



}



