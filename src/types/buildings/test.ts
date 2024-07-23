const entities: Record<string, object> = { '1': { name: 'Alice' }, '2': { name: 'Bob' } };
const ids = ['1', '2'];

const a = ids.map(id => entities[id]); // Output: { name: 'Alice' } and { name: 'Bob' }
console.log('🚀  a:', a);

const arr = [10, 20, 30];
console.log(arr[1]); // Output: 20
console.log(arr['1']); // Output: 20

const obj = { 1: 'one', '2': 'two' };
console.log(obj[1]); // Output: 'one'
console.log(obj['2']); // Output: 'two'
