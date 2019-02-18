"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullGrocery = getFullGrocery;
exports.getGroceryDataFromId = getGroceryDataFromId;
exports.getGroceryCollection = getGroceryCollection;
exports.getAllGrocery = getAllGrocery;
exports.getFirstFiveRecipes = getFirstFiveRecipes;
exports.getRecipes = getRecipes;

var _groceristarFetch = require("@groceristar/groceristar-fetch");

//@TODO clean up this. we don't need of this methods.
// i just copy-paste them quickly. 
function getGroceryById(id) {
  return _groceristarFetch.groceristar.getGroceryById(id);
}

function getFullGrocery(name) {
  return _groceristarFetch.groceristar.getGroceryByNameWithDepAndIng(name);
}

function getGroceryCollection() {
  return _groceristarFetch.groceristar.getGroceryShowcase();
}

function getAllGrocery() {
  return _groceristarFetch.groceristar.getAllGrocery();
}

function getGroceryDataFromId(id) {
  console.log(getGroceryById(id));
  var grocery = getGroceryById(id)[0];
  var groceryName = grocery.name;
  var groceryWithDepAndIng = getFullGrocery(groceryName);
  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  };
} //----------


function getRandomRecipe() {
  return _groceristarFetch.chickenKyiv.getRandomRecipe();
}

function getFirstFiveRecipes() {
  return _groceristarFetch.chickenKyiv.getFirstFiveRecipes();
}

function getShowcaseFiveRecipes() {
  return _groceristarFetch.chickenKyiv.getShowcaseFiveRecipes();
}

function getFiveRandomIngredients() {
  return _groceristarFetch.chickenKyiv.getFiveRandomIngredients();
} //@TODO i don't like this name too


function getRecipeChickenKyivById(id) {
  return _groceristarFetch.chickenKyiv.getRecipe()[id];
}

function getRecipes() {
  return _groceristarFetch.chickenKyiv.getRecipe();
}