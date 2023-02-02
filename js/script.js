
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
    currentGold: 0,
    image: 0
}


//player stats
const nameInput = document.querySelector('#name');
const strengthInput = document.querySelector('#strength');
const defenseInput = document.querySelector('#defense');
const dexterityInput = document.querySelector('#dexterity');

//image buttons
const left = document.querySelector('#left');
const right = document.querySelector('#right');
let imgIndex = 1;

//image
const image = document.querySelector('#image');


// finish
const finish = document.querySelector('#finish');


finish.addEventListener('click', function(e) {
    e.preventDefault();
    
    player.name = nameInput.value;
    player.str = strengthInput.value;
    player.def = defenseInput.value;
    player.dex = dexterityInput.value;
    player.image = imgIndex;

    localStorage.setItem('player', JSON.stringify(player));
    window.location = "../html/map.html";
});



left.addEventListener('click', function(event) {
    event.preventDefault();
    if(imgIndex > 1) --imgIndex;
    image.src = `../imgs/caracters/img-${imgIndex}.png`;
});
right.addEventListener('click', function(event) {
    event.preventDefault();
    if(imgIndex <= 3) ++imgIndex;
    image.src = `../imgs/caracters/img-${imgIndex}.png`;
});





image.src = `../imgs/caracters/img-${imgIndex}.png`;
