import { TreeNode } from "../../../data-structures";
import { BFS_226 } from "../BFS_226";
import { tree2 } from "../inputs";

function main(root: TreeNode | null): TreeNode | null {
  BFS_226(root, { withNullables: true, leftToRight: true });
  return root;
}

export { main, tree2 };
