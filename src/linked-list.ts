type NodeValue = string | number;
type NodeNext = LinkedListNode | null;

/* Node */
class LinkedListNode {
  readonly value: NodeValue;
  next: NodeNext;

  constructor(value: NodeValue, next: NodeNext = null) {
    this.value = value;
    this.next = next;
  }

  toString(): string {
    return `${this.value}`;
  }
}

/* List */
type LinkedListHead = LinkedListNode | null;
type LinkedListTail = LinkedListNode | null;

export class LinkedList {
  head: LinkedListHead;
  tail: LinkedListTail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  appEnd(value: NodeValue): this {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // O(1)
  prepEnd(value: NodeValue): this {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  // O(n)
  insertBefore(value: NodeValue, before: NodeValue): this {
    if (!this.head) {
      const newNode = new LinkedListNode(value);
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.head.value === before) {
      this.prepEnd(value);

      return this;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value !== before) {
      currentNode = currentNode.next;
    }

    if (currentNode.next) {
      currentNode.next = new LinkedListNode(value, currentNode.next);
    }

    return this;
  }

  // O(n)
  insertAfter(value: NodeValue, after: NodeValue): this {
    const foundNodeAfter = this.find(after);
    const newAfterNode = new LinkedListNode(value);

    newAfterNode.next = foundNodeAfter?.next ?? null;

    if (foundNodeAfter) {
      foundNodeAfter.next = newAfterNode;
    }

    if (newAfterNode.next === null) {
      this.tail = newAfterNode;
    }

    return this;
  }

  // O(n)
  find(value: NodeValue): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    let currentNode: NodeNext = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  // O(n)
  delete(value: NodeValue): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;

          if (currentNode.next === this.tail) {
            this.tail = currentNode;
          }
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  // O(n)
  toString(): string {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }

  // O(n)
  toArray(): LinkedListNode[] {
    let currentNode = this.head;
    const nodes = [];

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

const list = new LinkedList();
list.appEnd('a').appEnd('b').appEnd('c').appEnd('d');
console.log(['List as String1'], list.toString(), '\n');

list.prepEnd('x');
console.log(['List as String2'], list.toString(), '\n');

list.insertBefore('y', 'x');
console.log(['List as String3'], list.toString(), '\n');

list.insertBefore('w', 'b');
console.log(['List as String4'], list.toString(), '\n');

list.insertAfter('f', 'c');
console.log(['List as String5'], list.toString(), '\n');
