function sumFibs(num) {
  let prev = 0, curr = 1, sum = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    let next = curr + prev;
    prev = curr;
    curr = next;
  }
  return sum;
}
sumFibs(4);
