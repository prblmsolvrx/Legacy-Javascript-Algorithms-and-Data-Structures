function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  str = str.split("");
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push([str[i], pairs[str[i]]]);
  }
  return result;
}

pairElement("GCG");
