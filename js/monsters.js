
// let monster = {
//     name: '',
//     str: 0,
// 	dex: 0,
// 	def: 0,
// 	lvl: 1,
// 	life: 50,
//     xpReward: 0,
//     goldReward: 0,
//     image: 0
// }

// const prefix = ["the strong", "the speedy", "the ugly", "the evil"];
// const suffix = ["viper", "rock", "fiend", "monster", "googly"];

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function generateMonsterName() {
//     let rnd1 = getRandomInt(prefix.length);
//     let rnd2 = getRandomInt(suffix.length);
//     return prefix[rnd1] + " " + suffix[rnd2];
// }

// function generateMonster() {
//     //let name = generateName();
//     let level = getRandomInt(10);
//     let strength = level + getRandomInt(3);
//     let defense = level + getRandomInt(4);
//     let dexterity = level + getRandomInt(5);
//     let life = 10 + level * getRandomInt(20);
//     let xpReward = getRandomInt(500) + 500;
//     let goldReward = 15 + getRandomInt(50);
    
//     let monsterCharacter = Object.create(monster);    
    
//     //monsterCharacter.name = name;
//     monsterCharacter.str = strength;
// 	monsterCharacter.dex = dexterity;
// 	monsterCharacter.def = defense;
// 	monsterCharacter.lvl = level;
// 	monsterCharacter.life = life;
//     monsterCharacter.xpReward = xpReward;
//     monsterCharacter.goldReward = goldReward;
    
//     return monsterCharacter;
// }



// let monsters = [];


// function generateMonsterNames(number) {
//     let array = [];
//     let name;
//     for(let i = 0; i < number;) {
//         name = generateMonsterName();
//         if(array.includes(name) === false) {
//             array.push(name);
//             ++i;
//         } 
//     }
//     return array;
// }

// function generateMonsters(number) {
//     let names = generateMonsterNames(number);
//     let i;

//     for(i = 0; i < number; i++) {
//         monsters.push(generateMonster());
//     }   

//     for(i = 0; i < number; ++i) {
//         monsters[i].name = names[i];
//     }
// }


// let numberOfMonsters = 3 + getRandomInt(7);

// //objects
// const locationName = document.querySelector('#location-name');
// const monsterCards = document.querySelectorAll('#monster-list .monster-card');
// const photos = document.querySelectorAll('#monster-list .monster-card .image');


// let photoIndex = [];


// function generateIndex() {
//     let original = [1,2,3,4,5,6,7,8,9,10];
//     let i, number, swap;

//     for(i = 0; i < 10; ++i) {
//         number = 1 + getRandomInt(9);
//         swap = original[i];
//         original[i] = original[number];
//         original[number] = swap;
//     }

//     photoIndex = original;
// }


// function displayCards() {
//     let i;
//     for(i = numberOfMonsters; i < monsterCards.length; ++i) {
//         monsterCards[i].classList.add('hidden');
//     }
// }

// function displayMonsters() {
//     let i;
//     for(i = 0; i < numberOfMonsters; i++) {
//         monsterCards[i].querySelector('.name').innerText = monsters[i].name;
//         monsterCards[i].querySelector('.gold-reward').innerText = monsters[i].goldReward;
//         monsterCards[i].querySelector('.xp-reward').innerText = monsters[i].xpReward;
//         monsterCards[i].querySelector('.level').innerText = monsters[i].lvl;
//         monsterCards[i].querySelector('.life').innerText = monsters[i].life;
//     }
// }

// function displayImages() {
//     for(let i = 0; i < numberOfMonsters; i++) {
//         photos[i].src = `../imgs/monsters/img-${photoIndex[i]}.png`;
//     }
// }

// generateMonsters(numberOfMonsters);
// displayCards();
// displayMonsters();

// generateIndex();
// displayImages();









let _location = localStorage.getItem('location');
let numberOfMonsters = localStorage.getItem(`monsters-${_location}-size`);

const fiends = JSON.parse(localStorage.getItem(`monsters-${_location}`));

const locationName = document.querySelector('#location-name');
const monsterCards = document.querySelectorAll('#monster-list .monster-card');
const photos = document.querySelectorAll('#monster-list .monster-card .image');


function displayCards() {
    let i;
    for(i = numberOfMonsters; i < monsterCards.length; ++i) {
        monsterCards[i].classList.add('hidden');
    }
}

function displayMonsters() {
    let i;
    for(i = 0; i < numberOfMonsters; i++) {
        monsterCards[i].querySelector('.name').innerText = fiends[i].name;
        monsterCards[i].querySelector('.gold-reward').innerText = fiends[i].goldReward;
        monsterCards[i].querySelector('.xp-reward').innerText = fiends[i].xpReward;
        monsterCards[i].querySelector('.level').innerText = fiends[i].lvl;
        monsterCards[i].querySelector('.life').innerText = fiends[i].life;
    }
}

function displayImages() {
    for(let i = 0; i < numberOfMonsters; i++) {
        photos[i].src = `../imgs/monsters/img-${fiends[i].image}.png`;
    }
}

displayMonsters();
displayImages();
displayCards();



// section

const cards = document.querySelectorAll('.monster-card');

function addEventListeners() {

    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function(e) {
            e.preventDefault();
            //send monster to combat
            localStorage.setItem('enemy', JSON.stringify(fiends[i]));
            //go to combat.html
            window.location = '../html/combat.html'
        });
    }
}


addEventListeners();

