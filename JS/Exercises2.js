
// STRINGS 2 Concat
var x = 2;
var y = "Hey";

var result = y.concat(x);
console.log(result);

// Arrays 1 / Strings 3

let newArray = ["Hello", "Hi",  "Hey"];
newArray.push("Hola");
console.log(newArray);
newArray.pop();
console.log(newArray);

// CONDITIONS 1

class Person {
	constructor (name, age, occupation){
	    this.name = name;
	    this.age = age;
	    this.occupation = occupation;
	}
}

const newPerson = new Person('Rachel', 24, 'Student');

function checkAge(){
		if (newPerson.age<40 && newPerson.age>20){
			console.log('True');
		}else {
			console.log('False');
		}
	}

checkAge();

// ITERATIONS 1 and 2
// Create a for loop that increments from 1 to 10, outputting the current iteration at each step.
// i will exist throughout, so make sure you change value of i on another for loop

//var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//array = array.map(number => 

for (var i=1; i<=10; i++){
	if (i%2 == 0){
	console.log(i);
	}
}



	
