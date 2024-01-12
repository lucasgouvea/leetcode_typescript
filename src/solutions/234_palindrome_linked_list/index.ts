import { ListNode } from "../../data-structures/list-node";
export * from "./inputs";

// Time complexity O(n), Space complexity O(n)
export function isPalindrome(head: ListNode | null): boolean {
  // Space complexity O(n)
  const list: number[] = [];
  let current = head;

  // Time complexity O(n)
  while (current !== null) {
    list.push(current.val);
    current = current.next;
  }

  const isOdd = list.length % 2 > 0;

  if (isOdd) {
    list.splice(list.length / 2, 1);
  }

  if (list.length === 1) return true;

  // Time complexity O(n)
  const firstHalf = list.slice(0, list.length / 2);
  // Time complexity O(n)
  const secondHalfReversed = list.slice(list.length / 2, list.length).reverse();

  // Time complexity O(n)
  for (let i = 0; i <= list.length; i++) {
    if (firstHalf[i] !== secondHalfReversed[i]) {
      return false;
    }
  }

  return true;
}
