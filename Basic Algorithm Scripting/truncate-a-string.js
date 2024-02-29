function truncateString(str, num) {
  let x=str.substring(0,num);
  x=x+"...";
  if(str.length>num)
  return x;
  else
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);