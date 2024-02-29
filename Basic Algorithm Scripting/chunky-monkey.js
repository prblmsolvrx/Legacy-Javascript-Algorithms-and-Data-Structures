function chunkArrayInGroups(arr, size) {
  let result=[];
  for(let i=0;i<arr.length;i=i+size)
  {
     result.push(arr.slice(i,(i+size)))
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);