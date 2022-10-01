import { TreeNode } from "./TreeNode";

type BFSOptions = {
  withNullables: boolean;
  leftToRight: boolean;
};

function BFS(
  node: TreeNode | null,
  { withNullables, leftToRight }: BFSOptions
): number[] {
  if (leftToRight === true) {
    return BFSLeftToRight(node, withNullables);
  }
  return BFSRightToLeft(node, withNullables);
}

function BFSLeftToRight(node: TreeNode | null, withNullables: boolean) {
  if (node === null) {
    return [];
  }
  const visited: (number | null | undefined)[] = [];
  const queue: (TreeNode | undefined)[] = [];
  queue.push(node);
  visited.push(node.val);

  while (queue.length > 0) {
    const node = queue.shift();

    const leftNode = node?.left;
    const rightNode = node?.right;

    if (leftNode !== null) {
      queue.push(leftNode);
      visited.push(leftNode?.val);
    } else if (withNullables === true) {
      visited.push(null);
    }
    if (rightNode !== null) {
      queue.push(rightNode);
      visited.push(rightNode?.val);
    } else if (withNullables === true) {
      visited.push(null);
    }
  }

  return visited as number[];
}

function BFSRightToLeft(node: TreeNode | null, withNullables: boolean) {
  if (node === null) {
    return [];
  }
  const visited: (number | null | undefined)[] = [];
  const queue: (TreeNode | undefined)[] = [];
  queue.push(node);
  visited.push(node.val);

  while (queue.length > 0) {
    const node = queue.shift();

    const leftNode = node?.left;
    const rightNode = node?.right;

    if (rightNode !== null) {
      queue.push(rightNode);
      visited.push(rightNode?.val);
    } else if (withNullables === true) {
      visited.push(null);
    }
    if (leftNode !== null) {
      queue.push(leftNode);
      visited.push(leftNode?.val);
    } else if (withNullables === true) {
      visited.push(null);
    }
  }

  return visited as number[];
}

export { BFS };
