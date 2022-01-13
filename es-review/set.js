const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('some text');

const obj = {a: 1, b: 2};
mySet.add(obj);

console.log(mySet);
console.log(mySet.has(1));
console.log(mySet.size);

for(let item of mySet){
  console.log(item);
}