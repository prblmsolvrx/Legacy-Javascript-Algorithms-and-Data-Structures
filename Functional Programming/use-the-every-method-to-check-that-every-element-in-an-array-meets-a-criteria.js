/*The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
For example, the following code would check if every element in the numbers array is less than 10:*/

function checkPositive(arr) {
  // Only change code below this line
  return arr.every(currentvalue => currentvalue>0);
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);