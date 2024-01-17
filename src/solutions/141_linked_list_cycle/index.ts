import { ListNode } from "../../data-structures";
export * from "./inputs";

export function hasCycle(head: ListNode | null): boolean {
  const map = new Map();
  let pointer: ListNode | null = head;

  map.set(head, true);

  while (pointer !== null) {
    pointer = pointer.next;
    if (pointer === null) break;
    if (map.get(pointer)) {
      return true;
    }
    map.set(pointer, true);
  }

  console.log(map);
  return false;
}

// tortoise and hare algo

export function hasCycleTortoiseAndHare(head: ListNode | null): boolean {
  let slowPointer: ListNode | null | undefined = head;
  let fastPointer: ListNode | null = slowPointer;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer?.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}
