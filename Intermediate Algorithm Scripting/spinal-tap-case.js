/*
In one line, the regular expression /\s|_|(?=[A-Z])/ matches any whitespace character, underscore, or position before an uppercase letter. This can be used for splitting a string into words based on these separators.
*/
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');