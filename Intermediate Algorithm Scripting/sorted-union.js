function uniteUnique(...arrays) {
  return arrays
    .flat()
    .filter((item, index, array) => array.indexOf(item) === index);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);