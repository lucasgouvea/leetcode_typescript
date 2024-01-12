import { ListNode } from "../../data-structures/list-node";

const node4 = new ListNode(1, null);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const headTrue = node1;

const node2False = new ListNode(2, null);
const node1False = new ListNode(1, node2False);

const headFalse = node1False;

const node1True2 = new ListNode(1, null);

const headTrue2 = node1True2;

const node3True3 = new ListNode(1, null);
const node2True3 = new ListNode(0, null);
const node1True3 = new ListNode(1, null);

export { headTrue, headFalse, headTrue2 };
