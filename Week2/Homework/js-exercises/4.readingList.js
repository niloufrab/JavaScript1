'use strict';
let myBooks = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    alreadyRead: true,
  },
  {
    title: 'By the river Piedra I sat down and wept',
    author: 'Paulo Coelho',
    alreadyRead: true,
  },
  {
    title: 'The zahir',
    author: 'Paulo Coelho',
    alreadyRead: false,
  },
];

for (let i = 0; i < myBooks.length; i++) {
  console.log(myBooks[i].title + ' by ' + myBooks[i].author);
  if (myBooks[i].alreadyRead === true) {
    console.log(`You already read "${myBooks[i].title}"`);
  } else {
    console.log(`You still need to read "${myBooks[i].title}"`);
  }
}
