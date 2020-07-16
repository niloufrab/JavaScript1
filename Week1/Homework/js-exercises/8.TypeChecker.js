'use strict';
let myName = 'nilo';
let myLastName = 'ab';
let car = { model: '2020', type: 'new', color: 'white' };
let person = { firstName: 'John', age: '78', eyeColor: 'brown' };

if (typeof myName === typeof myLastName) {
  console.log('the same');
} else if (typeof myName === typeof car) {
  console.log('the same');
} else if (typeof myName === typeof person) {
  console.log('the same');
} else if (typeof myLastName === typeof car) {
  console.log('the same');
} else if (typeof myLastName === typeof person) {
  console.log('the same');
} else {
  console.log('not the same');
}

if (typeof car === typeof myName) {
  console.log('Same type');
} else {
  console.log('Not the same');
}
