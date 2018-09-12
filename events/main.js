var btn = document.querySelector('button'); //create variable for button tag
var background = document.querySelector('body');  //create variable for body tag 

btn.addEventListener('click', changeBg); //listen for click on the button

function random(number) { //function to generate random number from 0-255
  return Math.floor(Math.random()*(number+1));
}

function changeBg(e){ //runs function upon click event on button
	// var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	// document.body.style.backgroundColor = 'rgb('+ random(255) +','+ random(255) +','+ random(255) +')';
	background.style.backgroundColor = 'rgb('+ random(255) +','+ random(255) +','+ random(255) +')'; //style to change background
}