function alphabeticalOrder(arr) {
  // Only change code below this line
  /*Only change code below this line
  Use the sort method on the array and
  provide a comparison function
  The comparison function compares
  two elements, a and b, using localeCompare
  localeCompare compares strings in alphabetical
  order and returns -1, 0, or 1
  -1 if a should appear before b, 0 if they are equal, 
  and 1 if b should appear before a*/
  return arr.sort(function(a,b){
     return a.localeCompare(b);
  });
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);