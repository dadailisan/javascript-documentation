var x = 1;

function a() {
  var y = 2;
  // var para = document.createElement('p');
  // document.body.appendChild(para);
  // para.textContent = 'Value: ' + y;
  // output(y);
  output(x);
}
function b() {
  var z = 3;
  // output(z);
  output(x);
}
function output(value) {
  var para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = 'Value: ' + value;
  // a();
  
}

//nested functions

function myBigFunction() {
  var myValue = 1;
      
  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}