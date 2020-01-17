//Solutions

//============================================================
//Reversing a string solution 1
//============================================================

function reverse(str) {
	return str.split('').reverse().join('');
}


//Reversing a string solution 2 - for loop
function reverse(str) {
  let newArr = [];

  for (let i = str.length - 1; i >= 0; i--) { //best to avoid as easy to make a mistake
    newArr.push(str[i]);
  }
  return newArr.join("");
}

//Reversing a string solution 2 - for of

//'for in' will loop through property names
//'for of' will loop throuogh property values

function reverse(str) {
	
	let reversed = '';
	
	for (let character of str) {
		reversed = character + reversed 
		
		 /* Not reversed+= character as that will just reset each time and
		 end up returning what you already have
		 reversed = character + reversed takes what was in the reversed string the last time around and
		 includes it the next time around
		 so each new entry adds from the beginning
		 this will result in the characters adding in reversed order */
		
	}
	
  return reversed;
	
}

//More complex version using an array (reduce)

// reduce - take all the different values in an array and condense them down to one singular value
// which is what trying to do here
// condense all the array items to a single string value

function reverse(str) {
	
	str.split('').reduce((reversed, character) => {
		return character + reversed;
		
	}, '');	
}

//Or, a shortened version:

function reverse(str) {
	
	return str.split('').reduce((rev, char) => char + rev, '');	// the reduce fuction takes two separate arguments
	// the first is an arrow function
	// the second, starting initial value for the function, in this case, an empty string: ''
	// ==========================================
	// when reduce runs
	// will take the ''
	// pass it into the arrow function as the starting argument (where rev is a placeholder)
	// Whenever reduce runs, it is going to take the starting arg ('')
	// it will pass it into the arrow function as the first argument
	// WHATEVER GETS RETURNED FROM THAT INNER FUNCTION
	// will then be used as the STARTING argument for every successive run of the function
	// in total, the function runs one time for every element within the array
	
}

reverse("abcd   ");


//============================================================
// Palindrome solutions
//============================================================

//My Solution:

function palindrome(str) {
    let strToCheck = "";

    for (let char of str) {
        strToCheck = char + strToCheck;
    }

    if (strToCheck === str) {
        return true;
    }

    return false;
}

// My solution using a ternary operator

function palindrome(str) {
  return str ===
    str
      .split("")
      .reverse()
      .join("")
    ? true
    : false;
}


// SG Solution

function palindrome(str) {
	
	const reversed = str.split('').reverse().join('');
	
	return str === reversed
}

// SG solution using every()

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
	// -i so that will make sure increment through every step
	// through the loop/every time every function runs
  });
}

//============================================================
// Reversing an integer solutions
// Both input and output should be numbers
//============================================================

use:
// toString()
// Math.sign()
// parseInt(myNumber.toString()) - to turn back into a number

// SG Solution

function reverseInt(n) {

let reversed = n.toString().split('').reverse().join('')

if (n < 0) {
  return parseInt(reversed) * -1;
}
return parseInt(reversed)
}

// ==============================================================
// SG further enhancement
// ==============================================================
function reverseInt(n) {

let result = n.toString().split('').reverse().join('')

return parseInt(result) * Math.sign(n)
// Math.sign returns a 1 if +tve and a -1 if -tve
// so a positive check will keep the number as it is
// a negative check will flip the number to be negative
}

// ===============================================================
//As a single line

function reverseInt(n) {
  return (
    parseInt(n.toString().split("").reverse().join("")) * Math.sign(n));
}

// ===============================================================

// Some previous workings:
// Originally this:
function reverseInt(n) {

let result = (Math.sign(n) === -1 ? (n.toString().split('').slice(1).reverse().join('')) 
: (n.toString().split('').reverse().join('')))
// But not necessary to account for neg numbers as parseInt will remove the  if it is at
// the end of the string


if (Math.sign(n) === -1) {
  return parseInt('-' + result)
}
return parseInt(result)
}

// Initial solution (more verbose)
// will also not work on 0/-0

function reverseInt(n) {
  let result = "";
  
  if (Math.sign(n) === -1) {
    strNum = n.toString().slice(1);
  } else {
    strNum = n.toString();
  }

  for (let char of strNum) {
    result = char + result;
  }
  if (Math.sign(n) === -1) {
    result = "-" + result;
  }
  return parseInt(result);
}

// =======================================================
// Then these:
// My solution (does not account for -0)
// This solution doesn't handle -0 properly, it will return 0 so
  // the SG solution is better

function reverseInt(n) {

let result = n.toString().split('').reverse().join('')

if (Math.sign(n) === -1) {
  return parseInt('-' + result)
}
return parseInt(result)
}

// More streamlined solution (multiple return statments not required)

function reverseInt(n) {
  let result = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(Math.sign(n) === -1 ? "-" + result : result);
  // This solution doesn't handle -0 properly, it will return 0 so
  // the SG solution is better
}

