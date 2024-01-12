import { ListNode } from "../../data-structures/list-node";
import { head } from "./inputs";

// TC: O(n), n is the length of the list
// SC: O(n), n is the length of the list
function reverseList(head: ListNode | null): ListNode | null {
  let values = [];

  if (head === null) {
    return null;
  }

  let pointer = head;
  while (pointer !== null) {
    values.push(pointer.val);
    pointer = pointer.next as ListNode;
  }

  values = values.reverse();

  pointer = head;
  for (let i = 0; i < values.length; i++) {
    pointer.val = values[i];
    pointer = pointer.next as ListNode;
  }

  return head;
}

export { reverseList, head };
