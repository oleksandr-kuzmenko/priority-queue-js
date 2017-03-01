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
    this._data.push(item);
    this._up(this._data.length - 1);
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

  _up(position) {
    let pos = position;
    while (pos > 0) {
      const parent = pos - 1;
      if (this.comparator(this._data[pos], this._data[parent]) < 0) {
        const tmp = this._data[parent];
        this._data[parent] = this._data[pos];
        this._data[pos] = tmp;
        pos = parent;
      } else break;
    }
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
