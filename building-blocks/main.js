// var select = document.getElementById('weather'); //this line can also replace the querySelector('select')
// var select = document.querySelector('select');
// var para = document.querySelector('p');

// //once there is a selection, setWeather function will run
// select.addEventListener('change', setWeather);

// //once a weather is selected, it will go thru the if statements on the setWeather function
// function setWeather() {
//   var choice = select.value;

// // if (choice === 'sunny') {
// // para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
// // } else if (choice === 'rainy') {
// // para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
// // } else if (choice === 'snowing') {
// // para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
// // } else if (choice === 'overcast') {
// // para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
// // } else {
// // para.textContent = '';
// // }

// switch (choice) {
//     case 'sunny':
//       para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//       break;
//     case 'rainy':
//       para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
//       break;
//     case 'snowing':
//       para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//       break;
//     case 'overcast':
//       para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//       break;
//     default:
//       para.textContent = '';
//   }

// } //end of setWeather function

// var cheese = 'Cheddar';
// var para2 = document.getElementById('cheddar');

// if (cheese === 'Cheddar') {
// para2.textContent = 'Yay! Cheese available for making cheese on toast.';
// } else {
//   para2.textContent = 'No cheese on toast for you today.';
// }

var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

// select.onchange = function() {
//   ( select.value === 'black' ) ? update('black','white') : update('white','black');
// }

select.addEventListener('change', background)

function background(){
	( select.value === 'black' ) ? update('black','white') : update('white','black');
}





