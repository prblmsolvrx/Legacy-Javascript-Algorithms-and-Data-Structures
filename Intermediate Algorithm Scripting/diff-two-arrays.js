/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/
function diffArray(arr1, arr2) {
  const concatarr = arr1.concat(arr2).sort();
  const uncommonarr=[];
  for(let i=0;i<concatarr.length;i++){
      if(concatarr[i]!=concatarr[i+1] && concatarr[i]!=concatarr[i-1])
      {
        uncommonarr.push(concatarr[i]);
      }
  }
  return uncommonarr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);