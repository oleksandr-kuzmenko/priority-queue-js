# priority-queue-js [![Build Status](https://travis-ci.org/alxpy/priority-queue-js.svg?branch=master)](https://travis-ci.org/alxpy/priority-queue-js)
[![NPM](https://nodei.co/npm/priority-queue-js.png?mini=true)](https://nodei.co/npm/priority-queue-js/)

Yet another priority queue implementation.

# quick start
```js
import PriorityQueue from 'priority-queue-js';

const queue = new PriorityQueue();

queue.push(9);
queue.push(3);
queue.push(5);

expect(queue.data).toEqual([3, 5, 9]);
```

```js
function comparator(a, b) {
  return a.val - b.val;
}

const queue = new PriorityQueue({ comparator });

queue.push({ val: 9 });
queue.push({ val: 3 });
queue.push({ val: 5 });

for (const item of queue) {
    console.log(item.val);
}
```
