var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') { //if first name or last name is blank, don't submit
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}