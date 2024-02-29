function reverseString(str) {
  let newstr="";
  for(let i=0;i<str.length;i++)
  {
     let ch=str.charAt(i);
     newstr=ch+newstr;
  }
  str=newstr;
  return str;
}

reverseString("hello");