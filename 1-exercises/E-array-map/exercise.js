// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)
function hundred( numbers ){
    return numbers * 100
}
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersDouble = numbers.map( hundred );
console.log( numbersDouble );

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersHundred = numbers.map(function (numbers) {
  return numbers * 100;
} );
console.log( numbersHundred );

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersHundred = numbers.map( number => numbers * 100 );
console.log( numbersDouble );
