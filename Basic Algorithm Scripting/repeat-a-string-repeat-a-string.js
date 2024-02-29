function repeatStringNumTimes(str, num) {
  let r="";
  for(let i=0;i<num;i++)
  {
      r=r+str;
  }
  if(num<0)
  return "";
  else
  return r;
}

repeatStringNumTimes("abc", 3);