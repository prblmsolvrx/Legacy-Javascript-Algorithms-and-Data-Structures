const squareList = (arr) => {
  // Only change code below this line
  return arr.reduce((arrsqr, num) => {
    if (Number.isInteger(num) && num > 0) {
      arrsqr.push(num * num);
    }
    return arrsqr;
  }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);