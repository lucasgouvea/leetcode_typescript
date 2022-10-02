import { TreeNode } from "../../TreeNode";
import { tree2 } from "../../trees/tree2";

function main(root: TreeNode | null): TreeNode | null {
  swap(root)
  return root;
}

function swap(node: TreeNode | null): void {
  if(node !== null) {
    const tempNode = node.left !== null ? node.left : null
    node.left = node.right
    node.right = tempNode
    swap(node.left);
    swap(node.right);
  }
}

export { main, tree2 };
