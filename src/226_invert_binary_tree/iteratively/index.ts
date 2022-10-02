import { TreeNode } from "../../TreeNode";
import { BFS_226 } from "../BFS_226";
import { tree2 } from "../../trees/tree2";

function main(root: TreeNode | null): TreeNode | null {
  console.log(root);
  BFS_226(root, { withNullables: true, leftToRight: true });
  console.log(root);
  return root;
}

export { main, tree2 };
