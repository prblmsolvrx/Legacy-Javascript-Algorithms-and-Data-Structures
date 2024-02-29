/*One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as
input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.*/


function rot13(str) 
{
let arr = [];
for (let i = 0; i < str.length; i++)
switch(str[i]) {
case ",":
arr.push(",");
   break; 
case ".":
arr.push(".");
   break; 
case "?":
arr.push("?");
   break; 
case "!":
arr.push("!");
   break;  
case " ":
arr.push(" ");
   break;
case "A":
arr.push("N");
    break;
case "B":
arr.push("O");
    break;
case "C":
arr.push("P");
    break;
case "D":
arr.push("Q");
    break;
case "E":
arr.push("R");
    break;
case "F":
arr.push("S");
    break;
case "G":
arr.push("T");
    break;
case "H":
arr.push("U");
    break;
case "I":
arr.push("V");
    break;
case "J":
arr.push("W");
    break;
case "K":
arr.push("X");
    break;
case "L":
arr.push("Y");
    break;
case "M":
arr.push("Z");
    break;
case "N":
arr.push("A");
    break;
case "O":
arr.push("B");
    break;
case "P":
arr.push("C");
    break;
case "Q":
arr.push("D");
    break;
case "R":
arr.push("E");
    break;
case "S":
arr.push("F");
    break;
case "T":
arr.push("G");
    break;
case "U":
arr.push("H");
    break;
case "V":
arr.push("I");
    break;
case "W":
arr.push("J");
    break;
case "X":
arr.push("K");
    break;
case "Y":
arr.push("L");
    break;
case "Z":
arr.push("M");
}
var joined = arr.join("");
return joined;
}

rot13("SERR CVMMN!");