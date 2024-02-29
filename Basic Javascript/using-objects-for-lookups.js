// Setup
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line
  const Lookup={
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
  };
  result=Lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");