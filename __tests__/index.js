import PriorityQueue from '../src/index.js';


test('should return the correct length', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.length).toBe(3);
});


test('should correctly sorted numbers', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.data).toEqual([3, 5, 9]);
});


test('should correctly sorted objects', () => {
  function comparator(a, b) {
    return a.key - b.key;
  }
  const q = new PriorityQueue({ comparator });
  q.push({ key: 9 });
  q.push({ key: 3 });
  q.push({ key: 5 });
  expect(q.data).toEqual([
    { key: 3 },
    { key: 5 },
    { key: 9 },
  ]);
});
