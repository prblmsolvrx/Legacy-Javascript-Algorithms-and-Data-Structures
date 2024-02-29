function frankenSplice(arr1, arr2, n) {
  // Copy arr2 to avoid modifying the original array
  let newArr = arr2.slice();

  // Loop through each element in arr1
  for (let i = 0; i < arr1.length; i++) {
    // Use splice to insert the current element of arr1 into newArr
    // The index at which to insert is calculated as n + i
    // 0 is the delete count (we're not deleting any elements)
    // arr1[i] is the element to insert
    newArr.splice(n + i, 0, arr1[i]);
  }

  // Return the modified newArr with arr1 spliced in at index n
  return newArr;
}

// Example usage: splice [1, 2, 3] into [4, 5, 6] at index 1
frankenSplice([1, 2, 3], [4, 5, 6], 1);
