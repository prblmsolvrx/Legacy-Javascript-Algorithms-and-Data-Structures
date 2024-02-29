function bouncer(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== undefined && !Number.isNaN(arr[i]) && arr[i] !== "") {
      x.push(arr[i]);
    }
  }
  return x;
}

bouncer([7, "ate", "", false, 9]);
