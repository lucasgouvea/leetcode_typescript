function isPowerOfThree(n: number): boolean {
  // space complexity is O(1)
  let powerOfThree = 1;

  // time complexity is O(1)
  for (let i = 1; i < 1300; i++) {
    if (powerOfThree === n) {
      return true;
    }
    powerOfThree = powerOfThree * 3;
  }
  return false;
}
