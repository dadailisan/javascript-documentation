var person = {
	// name: ['Bob', 'Smith'],
	name: {
		first: 'Bob',
		last: 'Smith'
	},
	age: 32,
	gender: 'male',
	interests: ['music', 'skiing'],
	bio: function() {
		alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
	},
	greeting: function() {
	    alert('Hi! I\'m ' + this.name[0] + '.');
	}
};

//dot notation and bracket notation
//person.age, person['age']
//changing the value of object members
//person.age = 39
//adding new members on the object
//person.eyes = 'hazel'
//person.farewell = function(){ alert('Bye Everybody!');}


var person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
var person2 = {
  name: 'Brian',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}