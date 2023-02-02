
let monsters = [];


let monster = {
    name: '',
    str: 0,
	dex: 0,
	def: 0,
	lvl: 1,
	life: 50,
    xpReward: 0,
    goldReward: 0,
    image: 0
}

const prefix = ["the strong", "the speedy", "the ugly", "the evil"];
const suffix = ["viper", "rock", "fiend", "monster", "googly"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateIndex() {
    let original = [1,2,3,4,5,6,7,8,9,10];
    let i, number, swap;

    for(i = 0; i < 10; ++i) {
        number = 1 + getRandomInt(9);
        swap = original[i];
        original[i] = original[number];
        original[number] = swap;
    }

    return original;
}

function generateMonsterName() {
    let rnd1 = getRandomInt(prefix.length);
    let rnd2 = getRandomInt(suffix.length);
    return prefix[rnd1] + " " + suffix[rnd2];
}

function generateMonster() {
    //let name = generateName();
    let level = getRandomInt(10);
    let strength = level + getRandomInt(3);
    let defense = level + getRandomInt(4);
    let dexterity = level + getRandomInt(5);
    let life = 10 + level * getRandomInt(20);
    let xpReward = getRandomInt(500) + 500;
    let goldReward = 15 + getRandomInt(50);
    
    let monsterCharacter = Object.create(monster);    
    
    //monsterCharacter.name = name;
    monsterCharacter.str = strength;
	monsterCharacter.dex = dexterity;
	monsterCharacter.def = defense;
	monsterCharacter.lvl = level;
	monsterCharacter.life = life;
    monsterCharacter.xpReward = xpReward;
    monsterCharacter.goldReward = goldReward;
    
    return monsterCharacter;
}


function generateMonsterNames(number) {
    let array = [];
    let name;
    for(let i = 0; i < number;) {
        name = generateMonsterName();
        if(array.includes(name) === false) {
            array.push(name);
            ++i;
        } 
    }
    return array;
}

function generateMonsters(number) {
    let names = generateMonsterNames(number);
    let i;
    let images = generateIndex();
    let fiends = [];

    for(i = 0; i < number; i++) {
        fiends.push(generateMonster());
    }   

    for(i = 0; i < number; ++i) {
        fiends[i].name = names[i];
    }
    for(i = 0; i < number; ++i) {
        fiends[i].image = images[i];
    }
    return fiends;
}


function generateLocationMonsters(number) {
    let i;
    let rnd;
    for(i = 0; i < number; ++i) {
        rnd = getRandomInt(7) + 3;
        monsters.push(generateMonsters(rnd));

        localStorage.setItem(`monsters-${i}-size`, rnd.toString());
        localStorage.setItem(`monsters-${i}`, JSON.stringify(monsters[i]));
    }
}



generateLocationMonsters(5);




// button stuff

let i;
const locButtons = document.querySelectorAll('.location');

function pressButton(number) {
    //goto location
    //set index to number
    localStorage.setItem('location', number);
}

function addEventButtons() {
    locButtons[0].addEventListener('click', function (e) {
        pressButton('0');
    });
    locButtons[1].addEventListener('click', function (e) {
        pressButton('1');
    });
    locButtons[2].addEventListener('click', function (e) {
        pressButton('2');
    });
    locButtons[3].addEventListener('click', function (e) {
        pressButton('3');
    });
    locButtons[4].addEventListener('click', function (e) {
        pressButton('4');
    });
    
}

addEventButtons();
