function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b);
  let x;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>=num)
    {
      x=i;
      break;
    }
  }
  if(x===undefined)
  x=arr.length;
  return x;
}
getIndexToIns([40, 60], 50);