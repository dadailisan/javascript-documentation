//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
		if(mySrc === 'images/firefox-icon.png'){
			myImage.setAttribute('src', 'images/firefox2.png');
		} else{
			myImage.setAttribute('src', 'images/firefox-icon.png');
		}
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

/*What is JavaScript?*/
var para = document.querySelector('#p');

para.addEventListener('click', updateName);

function updateName(){
	var name = prompt('Enter a new name');
	para.textContent = 'Player 1: ' + name;
}
