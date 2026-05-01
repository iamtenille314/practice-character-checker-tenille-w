const readlineSync = require('readline-sync');

let phrase = readlineSync.question("Enter a word or phrase: ");

let index = readlineSync.questionInt("Enter an index number: ");

let character = phrase[index];

console.log("The character at index " + index + " is: " + character);