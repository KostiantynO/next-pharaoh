const entities: Record<string, object> = { '1': { name: 'Alice' }, '2': { name: 'Bob' } };
const ids = ['1', '2'];

const a = ids.map(id => entities[id]); // Output: { name: 'Alice' } and { name: 'Bob' }

const arr = [10, 20, 30];

const obj = { 1: 'one', '2': 'two' };

const test = [0, 1, 2, 3, 4];
console.table(test);
