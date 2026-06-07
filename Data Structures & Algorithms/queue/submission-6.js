class QueueNode {
  prev = null;
  next = null;
  value = null;

  constructor(value) {
    this.value = value;
  }
}

class MyDeque {
  size = 0;
  head = null;
  tail = null;

  constructor() {}

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @param {number} value
   */
  append(value) {
    const newNode = new QueueNode(value);

    if (this.isEmpty()) {
      // First element
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Insert after tail
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return null;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  appendleft(value) {
    const newNode = new QueueNode(value);

    if (this.isEmpty()) {
      // First element
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Insert before head
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
    return null;
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const value = this.tail.value;

    if (this.size === 1) {
      // Last element
      this.head = null;
      this.tail = null;
    } else {
      // Remove tail
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return value;
  }

  /**
   * @return {number}
   */
  popleft() {
    if (this.isEmpty()) {
      return -1;
    }

    const value = this.head.value;

    if (this.size === 1) {
      // Last element
      this.head = null;
      this.tail = null;
    } else {
      // Remove head
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return value;
  }

  /**
   * Print the deque for debugging
   * @return {string}
   */
  printQueue() {
    if (this.isEmpty()) return "";

    let current = this.head;
    let str = `(head) ${current.value}`;
    
    if (this.head === this.tail) {
      str += " (tail)";
      return str;
    }

    current = current.next;
    while (current) {
      str += ` -> ${current.value}`;
      if (current === this.tail) {
        str += " (tail)";
      }
      current = current.next;
    }

    return str;
  }
}