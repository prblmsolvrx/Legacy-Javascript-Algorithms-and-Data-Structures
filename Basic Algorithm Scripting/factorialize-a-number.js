function factorialize(num) {
  let f=1;
  for(let i=1;i<=num;i++)
  {
      f=f*i;
  }
  return f;
}

factorialize(5);