import { TreeNode } from "../../TreeNode";
import { tree1 } from "../../trees/tree1";
import { BFS } from "../../BFS";

function main(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const visitedLeft = BFS(root.left, {withNullables: true, leftToRight: true});
  const visitedRight = BFS(root.right, { withNullables: true, leftToRight: false });

  if(visitedLeft.length !== visitedRight.length) {
    return false
  }

  for(let i = 0; i < visitedLeft.length; i++) {
    if(visitedLeft[i] !== visitedRight[i]) {
      return false
    }
  }

  return true

}

export { main, tree1 };
