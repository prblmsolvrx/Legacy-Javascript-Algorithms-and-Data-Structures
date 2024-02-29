function whatIsInAName(collection, source) {
  // Use filter method to iterate over each object in the collection array
  return collection.filter(obj =>
    // Use every method to check if every key in the source object is present in the current object (obj) and has the same value
    Object.keys(source).every(key =>
      obj[key] === source[key]
    )
  );
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });