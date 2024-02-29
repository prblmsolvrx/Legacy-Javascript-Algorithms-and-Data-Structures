function steamrollArray(arr) {
  let flattenedArray = [];
  
  function flatten(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        flattenedArray.push(element);
      }
    });
  }

  flatten(arr);
  return flattenedArray;
}
steamrollArray([1, [2], [3, [[4]]]]);