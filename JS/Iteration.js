// ITERATION 3

let range = 50;
let str1 = 'Pop';
let str2 = 'Bang';
let str3 = str1.concat(str2);

fb(range, str1, str2, str3);

function fb (range, str1, str2, str3){
	for (let i=1; i<=range; i++){
		if (i%15==0) console.log(str3);
		else if (i%5==0) console.log(str1);
		else if (i%3==0) console.log(str2);
		else console.log(i);
	}
}


// Using a ternary operator
// = condition ? value if true : value if false 
// 0 and empty strings are falsys 
// Thus if both conditions are falsy then || i will print i 
// Since a non empty string is a truthy value, the OR operation will short circuit and return 'fizz' + 'buzz' = 'fizzbuzz'
for (let j=1; j<100;)
	console.log(( ++j%3 ? '' : 'fizz') + ( j%5 ? '' : 'buzz') || j)


	
	
	
// ITERATION 4
	
iteration4(40);

function iteration4 (number){
	let iterations = 0;
	let isNumber1 = false;
	do {
		if (number%3==0) {
			console.log(number + "divides by 3");
			number = number/3;
			return number;	
			return true;
		} else if (number==1) {
			console.log(iterations + "iterations");
			return false;
			break;
		}  else {
			console.log("1 added to " + number);
			number = number+1;
			return number;
			return true;
		}
		iteration = iteration + 1;
	} while (!isNumber1);
} 