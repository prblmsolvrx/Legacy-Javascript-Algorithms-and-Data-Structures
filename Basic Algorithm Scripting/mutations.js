function mutation(arr) {
  // Convert both strings to uppercase to make the comparison case-insensitive
  let x1 = arr[0].toUpperCase();
  let x2 = arr[1].toUpperCase();

  // Loop through each character in the second string
  for (let i = 0; i < x2.length; i++) {
    // Check if the current character in the second string is not found in the first string
    if (x1.indexOf(x2[i]) < 0) {
      // If a character is not found, return false immediately
      return false;
    }
  }
  // If all characters in the second string are found in the first string, return true
  return true;
}

// Test the function with ["hello", "hey"]
mutation(["hello", "hey"]);
