let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line g-to-get-the-value of non-alpha-numeric-\W
let result = quoteSample.match(nonAlphabetRegex).length;