function defaultComparator(a, b) {
  return a - b;
}


export default class PriorityQueue {

  constructor(params = {}) {
    this.data = [];
    this.comparator = params.comparator || defaultComparator;
  }

  get length() {
    return this.data.length;
  }

  push(item) {
    this.data.push(item);
    this.up(this.data.length - 1);
  }

  up(position) {
    let pos = position;
    while (pos > 0) {
      const parent = pos - 1;
      if (this.comparator(this.data[pos], this.data[parent]) < 0) {
        const tmp = this.data[parent];
        this.data[parent] = this.data[pos];
        this.data[pos] = tmp;
        pos = parent;
      } else break;
    }
  }

}
