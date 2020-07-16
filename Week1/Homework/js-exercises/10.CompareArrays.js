'use strict';
let firstArray = ['hi', 78, true, { age: 78 }];
let secondArray = [
  'hello',
  1398,
  true,
  1941,
  1320,
  null,
  { name: 'mylovelygrandma' },
];

console.log(firstArray.length);
console.log(secondArray.length);

if (firstArray.length === secondArray.length) {
  console.log('They are the same!');
} else {
  console.log('two different sizes');
}
