import { TreeNode } from "../../data-structures/tree-node";

const nodeG = new TreeNode(6, null, null);
const nodeF = new TreeNode(6, null, null);
const nodeE = new TreeNode(5, null, nodeG);
const nodeD = new TreeNode(5, nodeF, null);
const nodeC = new TreeNode(4, null, nodeE);
const nodeB = new TreeNode(4, nodeD, null);
const nodeA = new TreeNode(3, nodeB, nodeC);

const tree1 = nodeA;

export { tree1 };
