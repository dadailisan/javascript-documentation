//document.querySelector('html').style.backgroundColor = 'red'; just to test if link is OK.

//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
//if your getting id on the html, use getElementById('id name') no need for the '#' since its only use for css styling
var customName = document.getElementById('customname');
//if your getting id on the html, use document.querySelector('.class name') include '.' then name of class
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(takeArrays){
	return takeArrays[Math.floor(Math.random()*takeArrays.length)];
}

//2. RAW TEXT STRINGS

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. \
When they got to :inserty:, they stared in horror for a few moments, then :insertz:. \
Bob saw the whole thing, but was not surprised — :inserty: weighs 300 pounds, and it was a hot day.';
var insertX = ['small', 'medium', 'large'];
var insertY = ['red', 'green', 'blue'];
var insertZ = ['one', 'two', 'three'];

randomize.addEventListener('click', result);

function result(){

	var newStory = storyText
	var xItem = randomValueFromArray(insertX);
  	var yItem = randomValueFromArray(insertY);
  	var zItem = randomValueFromArray(insertZ);
  	
	newStory = newStory.replace(':insertx:', xItem);
	newStory = newStory.replace(':inserty:', yItem);
	newStory = newStory.replace(':insertz:', zItem);

	if (customName.value !== ''){
		var name = customName.value;
		newStory = newStory.replace('Bob',name.toUpperCase());
	}

	if (document.getElementById('uk').checked){
		var weight = Math.round(300) + ' stone';
		var temperature = Math.round(94) + ' centigrade';
		newStory = newStory.replace('94 fahrenheit', temperature);
		newStory = newStory.replace('300 pounds', weight);
	}

	story.textContent = newStory;
	story.style.visibility = 'visible'
}

/*1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

2. RAW TEXT STRINGS

It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

Willy the Goblin
Big Daddy
Father Christmas

the soup kitchen
Disneyland
the White House

spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away

3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    var name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}*/