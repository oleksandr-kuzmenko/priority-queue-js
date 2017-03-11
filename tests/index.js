import PriorityQueue from '../src/index';


test('should return the correct length', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.length).toBe(3);
});


test('should correctly sorted numbers', () => {
  let expected = [];
  const q = new PriorityQueue();
  Array(100).fill(1).forEach(() => {
    const n = Math.random() * 100;
    q.push(n);
    expected.push(n);
  });
  expected = expected.sort((a, b) => a - b);
  expect(q.copy()).toEqual(expected);
});


test('should correctly sorted objects', () => {
  function comparator(a, b) {
    if (a.msgid > b.msgid) {
      return 1;
    }
    if (a.msgid < b.msgid) {
      return -1;
    }
    return 0;
  }

  const q = new PriorityQueue({ comparator });

  const data = [
    { msgid: 'aaaaa', msgstr: '' },
    { msgid: 'ccccc', msgstr: '' },
    { msgid: 'eeeee', msgstr: '' },
    { msgid: 'bbbbb', msgstr: '' },
    { msgid: 'ddddd', msgstr: '' },
  ];

  q.push(data[0]);
  q.push(data[1]);
  q.push(data[2]);
  q.push(data[3]);
  q.push(data[4]);

  expect(q.copy()).toEqual([
    { msgid: 'aaaaa', msgstr: '' },
    { msgid: 'bbbbb', msgstr: '' },
    { msgid: 'ccccc', msgstr: '' },
    { msgid: 'ddddd', msgstr: '' },
    { msgid: 'eeeee', msgstr: '' },
  ]);
});


test('iterator works correctly', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  const expected = [];
  for (const item of q) {
    expected.push(item);
  }
  expect(q.copy()).toEqual(expected);
});


test('peek()', () => {
  const q = new PriorityQueue();
  expect(q.peek()).toEqual(undefined);
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.peek()).toEqual(3);
  expect(q.length).toBe(3);
});


test('pop()', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.pop()).toEqual(9);
  expect(q.length).toBe(2);
  expect(q.pop()).toEqual(5);
  expect(q.pop()).toEqual(3);
  expect(q.pop()).toEqual(undefined);
});


test('shift()', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.shift()).toEqual(3);
  expect(q.length).toBe(2);
  expect(q.shift()).toEqual(5);
  expect(q.shift()).toEqual(9);
  expect(q.shift()).toEqual(undefined);
});


test('slice()', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  expect(q.slice(0, 2)).toEqual([3, 5]);
});

test('forEach()', () => {
  const q = new PriorityQueue();
  q.push(9);
  q.push(3);
  q.push(5);
  const expected = [];
  q.forEach(item => expected.push(item));
  expect(q.copy()).toEqual(expected);
});


test('map()', () => {
  const q = new PriorityQueue();
  q.push(10);
  q.push(3);
  q.push(5);
  expect(q.map(item => item + 1)).toEqual([4, 6, 11]);
});
