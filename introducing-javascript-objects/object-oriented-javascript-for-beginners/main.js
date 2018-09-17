// function createNewPerson(name) {
//   var obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
//   return obj;
// }

// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
// }

// var person1 = new Person('Bob');
// var person2 = new Person('Sarah');

function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
  	if(this.gender === 'female'){
  		this.gender = 'She';
  	}else{
  		this.gender = 'He';
  	}
  	var interestsString = '';
  	for(i = 0; i < this.interests.length; i++){
    	if(i===this.interests.length-1){
    		interestsString += 'and ' +this.interests[i]+ '.';
    		break;
    	}else {
	    	interestsString += this.interests[i]+', ';
	    }
    }
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' +this.gender+ ' likes ' + interestsString);  
  };

  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'baking', 'dancing', 'singing', 'googling']);

//using Object() Contruction

var person3 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});

//using create() method, creating new object based on the existing object
var person2 = Object.create(person1);
person2.name //will have same value as person1 unless you change it
// person2.greeting() //will have same value as person1 unless you change it

//constructor property, creating new object
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};


