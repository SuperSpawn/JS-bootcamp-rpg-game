
const first = ["The electric", "The menacing", "The nice"];
const second = ["cave", "tavern", "town"];


const names = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function generateName() {
    let rnd1, rnd2;
    rnd1 = getRandomInt(first.length);
    rnd2 = getRandomInt(second.length);
    return first[rnd1] + " " + second[rnd2];
}

function generateNamesArray() {
    let array = [];
    let name;
    for(let i = 0; i < 5;) {
        name = generateName();
        if(array.includes(name) === false) {
            array.push(name);
            ++i;
        } 
    }
    return array;
}

const buttons = document.querySelectorAll(".location"); //TODO: add this class to buttons 

function assignNames() {
    let names = generateNamesArray();
    for(let i = 0; i < names.length; i++) {
        buttons[i].innerText = names[i];
    }
} 

assignNames();




