const input = [4, 1, 2, 1, 2];


// TC: O(nums)
// SC: O(1)
function singleNumber(nums: number[]): number {
  let n = nums[0]
  for(let i = 1; i < nums.length; i++) {
    n = n ^ nums[i]
  }
  return n
}

export { input, singleNumber };
