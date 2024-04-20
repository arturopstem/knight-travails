const createQueueNode = (value, next) => ({ value, next });

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const newNode = createQueueNode(item, null);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const { value } = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }
}

export default Queue;
