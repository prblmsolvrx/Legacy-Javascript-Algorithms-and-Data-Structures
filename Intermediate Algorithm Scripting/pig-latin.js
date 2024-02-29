function translatePigLatin(str) {
  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // Check if the first letter of the input string is a vowel
  if (vowels.includes(str[0])) {
    // If it is, append 'way' to the end of the string and return
    return str + 'way';
  } else {
    // If the first letter is not a vowel, find the index of the first vowel in the string
    let firstVowelIndex = str.length;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        firstVowelIndex = i;
        break;
      }
    }
    // Move the consonant cluster before the first vowel to the end of the string and append 'ay'
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
  }
}
translatePigLatin("consonant");