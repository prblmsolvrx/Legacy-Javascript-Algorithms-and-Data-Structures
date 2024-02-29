function Bird() {
  let weight = 15;

  this.getWeight = function() { //returning inside the function makes weight private
    return weight;
  };
}
let ducky = new Bird();
ducky.getWeight();