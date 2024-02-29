/*The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
For example, the following code would check if any element in the numbers array is less than 10:*/

function checkPositive(arr) {
  // Only change code below this line
return arr.some(currentvalue => currentvalue>0);
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);