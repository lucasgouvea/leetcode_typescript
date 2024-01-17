import { ListNode } from "../../data-structures/list-node";

const node4 = new ListNode(-4, null);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(3, node2);

node4.next = node2;

const node22 = new ListNode(2, null);
const node21 = new ListNode(1, node22);

node22.next = node21;

const node31 = new ListNode(1, null);

node22.next = node21;

const node43 = new ListNode(1, null);
const node42 = new ListNode(2, node43);
const node41 = new ListNode(1, node42);

const head = node1;
const head2 = node21;
const head3 = node31;
const head4 = node41;

export { head, head2, head3, head4 };
