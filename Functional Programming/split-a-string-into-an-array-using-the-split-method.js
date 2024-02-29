function splitify(str) {
  // Only change code below this line
  /*  The regular expression /\W/ matches
      any non-word character (equivalent to
      [^a-zA-Z0-9_])
  */
  return str.split(/\W/);
  // Only change code above this line
}

splitify("Hello World,I-am code");