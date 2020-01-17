// Section 6 - Max Chars
// The technique used to solve this can be used to solve
// Many other string related questions as well
// Good for any count/verification of a word

// achieved by setting up an object with properties and values
// relating to the given word i.e. character map for the word 'hello'

/* {
	H: 1,
	e: 1,
	l: 2,
	o: 1
} */
 
 // How to build the above object:
 function maxChar(str) {

  const charMap = {}

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char] ++;
    }
  }

return charMap

}

maxChar("abcccccccd") // { a: 1, b: 1, c: 7, d: 1 }
// maxChar("apple 1231111") === "1"


// A more streamlined version
function maxChar(str) {

  const charMap = {}

  for (let char of str) {
  charMap[char] = charMap[char] + 1 || 1  //if try to add 1 to undefined, end up with null
  // in the previous version above this is handled by 'if' statement to see if value exists yet
  // if it doesn't, make it equal to 1 (line 23)
  // =======================================================================================
  // This is handled here by:
  // if adding 1 to this value (as it is undefined/ nothing there first of all) results in null, 
  // assign an initial value of 1 
  // (the '|| 1' part on line 43)
  }
return charMap
}

// maxChar("abcccccccd") // === "c"
maxChar("apple 1231111") // === "1"

// How to iterate through the character map
// From line 71, note is a FOR IN loop (for objects) // FOR OF is for arrays and strings

function maxChar(str) {

  const charMap = {}
  let max = 0;
  let maxChar = '';

  for (let char of str) {
  charMap[char] = charMap[char] + 1 || 1
  }

  for (let char in charMap) { // char will be the keys (letters added to object)
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
return maxChar
}

// ============================================================================
// fizzBuzz
// ============================================================================

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {

  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }   
}

fizzBuzz(20)


// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz

// ============================================================================
// Array Chunking
// ============================================================================


