let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line