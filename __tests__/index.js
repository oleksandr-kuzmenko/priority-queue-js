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
      { msgid: 'fffff', msgstr: '' }
  ];

  q.push(data[0]);
  q.push(data[1]);
  q.push(data[2]);
  q.push(data[3]);
  q.push(data[4]);

  expect(q.data).toEqual([
    { msgid: 'aaaaa', msgstr: '' },
    { msgid: 'bbbbb', msgstr: '' },
    { msgid: 'ccccc', msgstr: '' },
    { msgid: 'eeeee', msgstr: '' },
    { msgid: 'fffff', msgstr: '' }
  ]);
});
