'use strict';

let cartForParty = { beers: 1.75, chips: 0.99, cake: 2, water: 1, cheese: 2 };

function calculateTotalPrice(cartForParty) {
  for (const key in cartForParty) {
    price = price + cartForParty[key];
  }

  return `"Total: €${price}"`;
}

calculateTotalPrice(cartForParty);
