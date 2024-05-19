class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  enque(item) {
    this._items[this._count] = item;
    this._count++;
  }

  deque() {
    if (this.isEmpty()) {
      return 'Underflow!';
    }
    const item = this._items[0];
    for (let i = 0; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._count--;
    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in Queue';
    }
    return this._items[0];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }
}

const queue = new Queue();
queue.enque('Item 1');
queue.enque('Item 2');
queue.enque('Item 3');
console.log(queue);
queue.deque();
console.log(queue);
console.log('Top Item', queue.peek());
console.log('Length', queue.length());
