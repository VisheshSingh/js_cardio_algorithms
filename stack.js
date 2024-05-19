class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow!';
    }
    const item = this._items[this._count - 1];
    this._count--;
    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }
    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }
}

const stack = new Stack();
stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
console.log(stack);
stack.pop();
console.log(stack);
console.log('Top Item: ', stack.peek());
console.log('Length: ', stack.length());
