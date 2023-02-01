
//start page button
const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    e.preventDefault();
    window.location = "../html/create_character.html";
});

//charcter page input


let player = {
    name: '',
    str: 0,
	dex: 0,
	def: 0,
	lvl: 1,
	life: 50,
    currentXP: 0,
    currentGold: 0
}


//player stats
const nameInput = document.querySelector('#name');
const strengthInput = document.querySelector('#strength');
const defenseInput = document.querySelector('#defense');
const dexterityInput = document.query('#dexterity');

//image buttons
const left = document.querySelector('#left');
const right = document.querySelector('#right');
let imgIndex = 1;

//image
const image = document.querySelector('img');


// finish
const finish = document.querySelector('#finish');


finish.addEventListener('click', function(e) {
    e.preventDefault();
    
    player.name = nameInput.value;
    player.str = strengthInput.value;
    player.def = defenseInput.value;
    player.dex = dexterityInput.value;
    
    localStorage.setItem('player', JSON.stringify(player));
    window.location = "../html/map.html";
});



left.addEventListener('click', function(event) {
    if(imgIndex !== 1) --imgIndex;
    image.src = `../assets/img-${imgIndex}.png`;
});
right.addEventListener('click', function(event) {
    if(imgIndex < 10) ++imgIndex;
    image.src = `../assets/img-${imgIndex}.png`;
});






