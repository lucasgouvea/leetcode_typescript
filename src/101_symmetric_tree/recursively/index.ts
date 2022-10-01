import { TreeNode } from "../../TreeNode";
import { nodeA } from "../tree";

function main(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const symmetric = isSymmetric(root.left, root.right);
  console.log({ symmetric });
  return symmetric;
}

function isSymmetric(lTree: TreeNode | null, rTree: TreeNode | null): boolean {
  if (lTree === null || rTree === null) {
    return lTree === rTree;
  }

  if (
    (lTree === null && rTree !== null) ||
    (lTree !== null && rTree === null)
  ) {
    return false;
  }

  if (lTree?.val !== rTree?.val) {
    return false;
  }

  return (
    isSymmetric(lTree.left, rTree.right) && isSymmetric(lTree.right, rTree.left)
  );
}

main(nodeA);

export { main, nodeA };
