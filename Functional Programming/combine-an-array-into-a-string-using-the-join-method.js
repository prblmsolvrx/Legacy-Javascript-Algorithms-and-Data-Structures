function sentensify(str) {
  // Only change code below this line
  /*
    The regular expression
    \W matches any non-word 
    character in a string.*/
  return str.split(/\W/).join(" ");//non alphabet /\W/
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");