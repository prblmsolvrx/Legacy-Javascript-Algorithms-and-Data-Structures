function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse=new House(70);

myHouse instanceof House;
/*instanceof checks whether myHouse
obj created with House constructor
is true or not*/