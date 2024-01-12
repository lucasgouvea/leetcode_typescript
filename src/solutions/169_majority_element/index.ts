// TODO: optimize
function majorityElementHashMap(nums: number[]): number {
  // Os(n) - linear with each unique number in the array
  const map = new Map<number, number>();

  // Ot(n)
  for (let i = 0; i < nums.length; i++) {
    const count = map.get(nums[i]); // Ot(1)
    if (count !== undefined) {
      map.set(nums[i], count + 1); // Ot(1)
    } else {
      map.set(nums[i], 1); // Ot(1)
    }
  }

  let element = null;

  // Ot(n)
  for (const [key, value] of map.entries()) {
    // Ot(1)
    if (element === null) {
      element = { key, value };
    } else if (value > element.value) {
      element = { key, value };
    }
  }

  if (element !== null) {
    return element.key;
  }

  return -1;
}


//Boyer-Moore Voting Algorithm
function majoritElementBoyerMorre(nums: number[]): number {
  // Os(1), since we are using only 2 variables in this Algorithm
  let candidate = nums[0];
  let count = 1; // keep the track of the "points"

  // Ot(n), where n is the length of the nums array
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

export { majorityElementHashMap, majoritElementBoyerMorre };