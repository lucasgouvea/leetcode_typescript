import { TreeNode } from "../../../data-structures";
import { tree2 } from "../inputs";

function main(root: TreeNode | null): TreeNode | null {
  swap(root);
  return root;
}

function swap(node: TreeNode | null): void {
  if (node !== null) {
    const tempNode = node.left !== null ? node.left : null;
    node.left = node.right;
    node.right = tempNode;
    swap(node.left);
    swap(node.right);
  }
}

export { main, tree2 };
