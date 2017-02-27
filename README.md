# priority-queue-js [work in progress...] [![Build Status](https://travis-ci.org/alxpy/priority-queue-js.svg?branch=master)](https://travis-ci.org/alxpy/priority-queue-js)
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
