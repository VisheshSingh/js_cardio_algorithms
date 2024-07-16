class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at first
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  // Insert at last
  insertLast(data) {
    const node = new Node(data);
    let current;

    if (!this.head) {
      this.insertFirst(data);
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    let node = new Node(data);
    let previous;
    let current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    previous.next = current.next;

    this.size--;
  }
  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertLast(500);

ll.insertAt(600, 3);
ll.getAt(4);
ll.removeAt(2);
// ll.clearList()

ll.printList();
