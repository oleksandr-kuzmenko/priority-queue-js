# priority-queue-js [![Build Status](https://travis-ci.org/alxpy/priority-queue-js.svg?branch=master)](https://travis-ci.org/alxpy/priority-queue-js)
[![NPM](https://nodei.co/npm/priority-queue-js.png?downloads=true)](https://nodei.co/npm/priority-queue-js/)

Yet another priority queue implementation.

# Caution
This is a very alpha, API can be changed.

# Features
- implementation of Array interface (`push`, `slice`, `forEach`, `map` etc.)
- written in ES6

# Installing
`npm install priority-queue-js`

# API
- `.push(item)` - inserts a new item
- `.peek()` - returns the smallest item
- `.pop()` - removes the smallest item and returns it
- `.shift()` - removes the biggest item and returns it
- `.slice(begin, end)` - returns slice of queue data
- `.copy()` - returns copy of queue data

# Quick start
```js
import PriorityQueue from 'priority-queue-js';

const queue = new PriorityQueue();

queue.push(9);
queue.push(3);
queue.push(5);

console.log(queue.copy())  // [3, 5, 9]
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

# License
[MIT](https://github.com/alxpy/priority-queue-js/blob/master/LICENSE)
