import { TreeNode } from "../TreeNode";
import { array2 } from "../arrays";


// TC: the function will be called by each element in the nums array -> O(n)
// SC: since we are using only one constant to define the middle element -> O(1)
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0], null, null);
  }

  const middleIndex = Math.floor(nums.length / 2);
  return new TreeNode(
    nums[middleIndex],
    sortedArrayToBST(nums.slice(0, middleIndex)),
    sortedArrayToBST(nums.slice(middleIndex + 1, nums.length))
  );
}

export { sortedArrayToBST, array2 };
