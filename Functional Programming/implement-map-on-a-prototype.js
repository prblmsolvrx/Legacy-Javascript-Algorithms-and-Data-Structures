Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i=0;i<this.length;i++)
  {
    /*
    // Iterate over each element of the array
    // Call the callback function with three arguments:
    // - the current element of the array
    // - the current index
    // - the original array
    // Push the result of the callback function to the new array
    */
    newArray.push(callback(this[i],i,this));
  }
  // Only change code above this line
  return newArray;
};