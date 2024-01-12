import { TreeNode } from "../../data-structures";
import { tree2 } from "./inputs";

function traverse(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  } else {
    return 1 + Math.max(traverse(root.left), traverse(root.right));
  }
}

function maxDepth(root: TreeNode | null): number {
  const depth = traverse(root);
  return depth;
}

export { maxDepth, tree2 };
