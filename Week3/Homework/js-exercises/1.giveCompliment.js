'use strict';
function giveCompliment(yourName) {
  const compliments = [
    'great',
    'awesome',
    'amazing',
    'super',
    'incredible',
    'wonderful',
    'inspiring',
    'spectacular',
    'phenomenal',
    'unbelievable',
  ];
  let randomCompliment =
    compliments[math.floor(math.random() * compliments.length)];
  return `You are ${randomCompliment}, ${yourName}!`;
}
giveCompliment('niloufar');
giveCompliment('niloufar');
giveCompliment('niloufar');
