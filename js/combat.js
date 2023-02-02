
const actors = [];

const player = JSON.parse(localStorage.getItem('player'));
const monster = JSON.parse(localStorage.getItem('enemy'));;

console.log(player);
console.log(monster);

const index = localStorage.getItem('enemy-index');

let _location = localStorage.getItem('location');
let numberOfMonsters = localStorage.getItem(`monsters-${_location}-size`);
const array = JSON.parse(localStorage.getItem(`monsters-${_location}`));


actors[0] = player;
actors[1] = monster;






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
const startAgain = document.querySelector('#start-again')

const status = document.querySelector('#status-box');


const playerCard = document.querySelector('#player-card');
const playerName = document.querySelector('#player-name');
const playerImage = document.querySelector('#player-image');
const playerLife = document.querySelector('#player-health');
const playerXP = document.querySelector('#player-xp');
const playerLevel = document.querySelector('#player-level');



let whosTurn = 0;

//prepActors();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function roll() {
    return getRandomInt(10) + getRandomInt(10) + 1;
}


// function prepActors() {
//     player.str = Number.parseInt(player.str);
//     player.def = Number.parseInt(player.def);
//     player.dex = Number.parseInt(player.dex);

//     monster.str = Number.parseInt(monster.str);
//     monster.def = Number.parseInt(monster.def);
//     monster.dex = Number.parseInt(monster.dex);
// }


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
    
    if(whosTurn === 0) {
        playerCard.classList.add('attacking');
    }
    else {
        monsterCard.classList.add('attacking');
    }


}



function gameOver() {
    localStorage.clear();
    whosTurn = -1;
    
    window.location = '../html/index.html';
}


function turn() {
    actorHit(rolls[whosTurn]);
    
    if(whosTurn === 0) {
        playerCard.classList.remove('attacking');
    }
    else {
        monsterCard.classList.remove('attacking');
    }
    whosTurn = (whosTurn === 0) ? 1 : 0;
    if(whosTurn === 0) {
        playerCard.classList.add('attacking');
    }
    else {
        monsterCard.classList.add('attacking');
    }

    

    if(actors[whosTurn].life <= 0) {
        if(whosTurn === 0) {
            //game over
            gameOver();
        }
        else {
            //reward player
            rewardPlayer();
            //remove monster from list
            array.splice(index, 1);
            localStorage.setItem(`monsters-${_location}`, JSON.stringify(array));
            
            //battle over
            window.location = '../html/map.html';
        }
    }

    displayMonster();
    displayPlayer();
}

function rewardPlayer() {
    player.currentGold += monster.goldReward;
    player.currentXP += monster.xpReward;
    if(player.currentXP >= 1000) {
        player.currentXP -= 1000;
        player.lvl++;
    }
}



function actorHit(score) {
    let actorScore;
    let other = (whosTurn === 0) ? 1 : 0;
    actorScore = (score + actors[whosTurn].str) * actors[whosTurn].lvl;
    actorScore -= actors[other].def;
    if(actorScore > 0)
        actors[other].life -= actorScore;
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



function displayPlayer() {
    playerName.innerText = `Name: ${player.name}`;
    playerImage.src = `../imgs/02caracters/img-${player.image}.png`;
    playerLife.innerText = `Life: ${player.life}`;
    playerXP.innerText = `xp: ${player.currentXP}`;
    playerLevel.innerText = `level: ${player.lvl}`;
}

function displayMonster() {
    monsterName.innerText = `Name: ${monster.name}`;
    monsterImage.src = `../imgs/monsters/img-${monster.image}.png`;
    monsterLife.innerText = `Life: ${monster.life}`;
    monsterXP.innerText = `xp: ${monster.xpReward}`;    
    monsterLevel.innerText = `level: ${monster.lvl}`;
}




// function displayBox() {
//     let message = '';
    
//     if(whosTurn === 0) {
//         message.concat("Player's turn \n");
//     }
//     else if(whosTurn === 1) {
//         message.concat("Monster's turn \n");
//     }
//     else {
//         message.concat("Game over");
//     }
    
// }

whoStartsFirst();
displayMonster();
displayPlayer();



attack.addEventListener('click', function(e) {
    if(whosTurn === 0) {
        turn();
        whosTurn = 1;
        setTimeout(turn(), 5000);
    }   
})
runAway.addEventListener('click', function(e) {
    window.location = '../html/map.html'
});




