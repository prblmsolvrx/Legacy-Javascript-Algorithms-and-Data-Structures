function confirmEnding(str, target) {
  let targetlength=target.length;
  let startindex=str.length-targetlength;
  let result=str.substring(startindex);
  return result===target;
}

confirmEnding("Bastian", "n");