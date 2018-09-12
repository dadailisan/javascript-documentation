// displayMessage(); //calling the function
var html = document.querySelector('html');
var openBtn = document.createElement('button');
openBtn.textContent = 'Open the message box';
html.appendChild(openBtn);

openBtn.addEventListener('click', openMsg)
function openMsg(e){
	openBtn.parentNode.removeChild(openBtn);
	displayMessage('woo, this is a different message!', 'warning');
}

function displayMessage(msgText, msgType){
	// var html = document.querySelector('html'); //selecting the html page

	var panel = document.createElement('div'); //creating div tag
	panel.setAttribute('class', 'msgBox'); //creating class for the div
	html.appendChild(panel); //appending the div to the html page

	var msg = document.createElement('p'); //creating paragraph tag
	msg.textContent = msgText; //adding text inside the paragraph
	panel.appendChild(msg); //appending the paragraph inside the div

	var closeBtn = document.createElement('button'); //creating button tag
	closeBtn.textContent = 'x'; //addint text for the button
	panel.appendChild(closeBtn); //appending button tag inside the div *append adds the element at the end

	closeBtn.onclick = function() { //run the function once click event happens on the closeBtn(button tag 'x')
		panel.parentNode.removeChild(panel); //removing the div on the html page which erase all the data
		html.appendChild(openBtn);
	}

	if (msgType === 'warning') {
	  msg.style.backgroundImage = 'url(icons/warning.png)';
	  panel.style.backgroundColor = 'red';
	} else if (msgType === 'chat') {
	  msg.style.backgroundImage = 'url(icons/chat.png)';
	  panel.style.backgroundColor = 'aqua';
	} else {
	  msg.style.paddingLeft = '20px';
	}

	//OTHER WAY TO WRITE THE FUNCTION EVENT ONCLICK
	// closeBtn.addEventListener('click', clearPage)
	// function clearPage(e){
	// 	panel.parentNode.removeChild(panel);
	// }
}

