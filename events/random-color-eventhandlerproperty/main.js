// var btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random()*number);
}
function bgChange(e) {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol;
	// document.body.style.backgroundColor = rndCol; //create background for the body
	// e.target.style.backgroundColor = rndCol; //create background on the button
	// console.log(e);
}

// btn.onclick = bgChange; //background changes everytime you click the button
// btn.onfocus = bgChange; //changes color when focus on the button
// btn.onblur = bgChange;//changes color when off the focus on the button
// btn.ondblclick = bgChange; //change background when double clicked
// btn.onmouseover = bgChange; //change color when mouse hover on the button
// btn.onmouseout = bgChange; //change color when mouse hover-out on the button
// window.onkeypress = bgChange; //bg change on keypress
// window.onkeydown = bgChange; //bg change on keypress down
// window.onkeyup = bgChange; //bg change on keypress release

for(var i = 1; i <= 16; i++) {
    var myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
  }

var divs = document.querySelectorAll('div');

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}




// for(var i = 1; i <= 16; i++) {
//         var myDiv = document.createElement('div');
//         document.body.appendChild(myDiv);
//       }

//       function random(number) {
//         return Math.floor(Math.random()*number);
//       }

//       function bgChange() {
//         var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//         return rndCol;
//       }

//       var divs = document.querySelectorAll('div');

//       for(var i = 0; i < divs.length; i++) {
//         divs[i].onclick = function(e) {
//           e.target.style.backgroundColor = bgChange();
//         }
//       }




