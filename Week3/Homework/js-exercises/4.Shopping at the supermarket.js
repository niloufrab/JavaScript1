'use strict';

const shoppingCart = ['bananas', 'milk'];
function addToShoppingCart(groceryItem) {
  shoppingCart.push(groceryItem);
  //insert at index 0 
  //or shoppingCart.splice(0,0,groceryItem); 
  //push()/pop()add/remove from end
  //unshift()/shift() add/remove from begin
  if(shoppingCart.length > 3){
    shoppingCart.shift();
}


for(let i = 0; i < shoppingCart.length; i++){
  let shoppingList = shoppingCart[i];
  return "You bought " + shoppingList + "!";

}

addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');
