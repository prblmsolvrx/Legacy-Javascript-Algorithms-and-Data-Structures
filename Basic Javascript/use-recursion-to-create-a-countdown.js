// Only change code below this line
function countdown(n,arr=[]){
  if(n<1)
  {
    return arr;
  }
  else
  {
     arr.push(n);
     return countdown(n-1,arr);
  }
}
// Only change code above this line