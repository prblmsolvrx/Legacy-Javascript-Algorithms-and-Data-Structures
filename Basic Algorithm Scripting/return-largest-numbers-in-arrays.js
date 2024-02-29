function largestOfFour(arr) {
  let resultarr=[];
  for(let i=0;i<arr.length;i++)
  {
    let max=-9999999999;
    for(let j=0;j<arr[i].length;j++)
    {
         if(arr[i][j]>max)
         {
           max=arr[i][j];
         }
    }
    resultarr.push(max);
  }
  return resultarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);