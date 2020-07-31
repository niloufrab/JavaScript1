'use strict';

function validateCreditNumber(cardNumber) {
  let valid = true;
  //input must be 16 characters
  if (cardNumber.length !== 16) {
    console.log(
      `Invalid! The input ${cardNumber} should contain 16 characters`,
    );

    return (valid = false);
  }
  //All characters must be numbers
  for (let i = 0; i < cardNumber.length; i++) {
    if (!Number.isInteger(cardNumber[i])) {
      console.log(
        `Invalid! The input ${cardNumber} should contain only numbers!`,
      );
      return (valid = false);
    }
  }

  //At least two different numbers should be represented
  for (let i = 1; i < cardNumber.length; i++) {
    cardNumber[0] !== cardNumber[i];
    break;
  }
  if ((i === 16) & (cardNumber[0] === cardNumber[i])) {
    console.log(
      `Invalid! The input ${cardNumber} should contain at least 2 different types of numbers!`,
    );
    return (valid = false);
  }

  //The last number must be even
  let lastNumber = cardNumber % 10;
  if (lastNumber % 2 !== 0) {
    console.log(
      `Invalid! The input ${cardNumber} should contain an even final number!`,
    );
    return (valid = false);
  }

  //The sum of all the numbers must be greater than 16
  let sum = 0;
  while (cardNumber > 0) {
    const digit = cardNumber % 10;
    sum += digit;
    cardNumber = math.floor(cardNumber / 10);
  }
  if (sum < 16) {
    console.log(
      `Invalid! The sum of all the numbers in the input ${cardNumber} should be greater than 16`,
    );
    return (valid = false);
  }
  if ((valid = true)) {
    console.log(
      `Success! The input ${cardNumber} is a valid credit card number!`,
    );
  }
}
