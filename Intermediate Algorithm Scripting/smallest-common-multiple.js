function smallestCommons(arr) {
  // Sort the input array in ascending order
  const [min, max] = arr.sort((a, b) => a - b);

  // Start with the largest number as the potential smallest common multiple
  let scm = max;

  // Loop from the second largest number down to the smallest number in the range
  for (let i = max - 1; i >= min; i--) {
    // If the current potential SCM is not divisible by the current number,
    // increment the potential SCM by the largest number and reset the loop to start over
    if (scm % i !== 0) {
      scm += max;
      i = max; // Reset the loop to check divisibility with all numbers again
    }
  }

  // Return the smallest common multiple
  return scm;
}
