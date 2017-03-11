function defaultComparator(a, b) {
  return a - b;
}


class PriorityQueue {

  constructor(params = {}) {
    this._data = [];
    this.comparator = params.comparator || defaultComparator;
  }

  get length() {
    return this._data.length;
  }

  push(item) {
    this._push(item);
  }

  peek() {
    return this._data[0];
  }

  pop() {
    return this._data.pop();
  }

  shift() {
    return this._data.shift();
  }

  slice(begin, end) {
    return this._data.slice(begin, end);
  }

  copy() {
    return this._data.slice();
  }

  forEach(cb) {
    return this._data.forEach(cb);
  }

  map(cb) {
    return this._data.map(cb);
  }

  /**
   * TODO: Fix this ugly code and write benchmark
   * Maybe I should just use `Array.sort`?
   */
  _push(item) {
    if (this.length === 0) {
      this._data.push(item);
      return;
    }

    if (this.length < 3) {
      this._data.push(item);
      this._data.sort(this.comparator);
      return;
    }

    let leftPos = 0;
    let rightPos = this.length - 1;

    while (rightPos - leftPos > 1) {
      const midPos = Math.floor(((leftPos + rightPos) / 2));

      if (this.comparator(item, this._data[midPos]) < 0) {
        rightPos = midPos;
      } else {
        leftPos = midPos;
      }
    }

    if (this.comparator(item, this._data[leftPos]) <= 0) {
      this._data = [item, ...this._data];
      return;
    } else if (this.comparator(item, this._data[rightPos]) >= 0) {
      this._data.push(item);
      return;
    }

    const left = this._data.slice(0, leftPos + 1);
    const right = this._data.slice(leftPos + 1);
    this._data = [...left, item, ...right];
  }

  [Symbol.iterator]() {
    let current = 0;
    const thisData = this._data;
    const len = thisData.length;
    return {
      next() {
        if (current < len) {
          const idx = current;
          current += 1;
          return {
            value: thisData[idx],
            done: false,
          };
        }
        return { done: true };
      },
    };
  }

}


module.exports = PriorityQueue;
