function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax-myMin+1))+myMin;//+1 is for equal to myMax
}