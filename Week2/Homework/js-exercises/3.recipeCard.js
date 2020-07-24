'use strict';

const myRecipe = {};
myRecipe.title = 'Omelette';
myRecipe.Servings = 2;
myRecipe.Ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'];

for (let key in myRecipe) {
  console.log(`${key} : ${myRecipe[key]}`);
}
