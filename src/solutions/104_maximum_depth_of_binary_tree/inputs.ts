import { TreeNode } from "../../data-structures/tree-node";

const nodeG = new TreeNode(9, null, null);
const nodeF = new TreeNode(6, null, null);
const nodeE = new TreeNode(3, null, null);
const nodeD = new TreeNode(1, null, null);
const nodeC = new TreeNode(7, nodeF, nodeG);
const nodeB = new TreeNode(2, nodeD, nodeE);
const nodeA = new TreeNode(4, nodeB, nodeC);

const tree2 = nodeA;

export { tree2 };
