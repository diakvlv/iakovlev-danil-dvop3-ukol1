"use strict";

//ARRAY
var array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];

for (var i = 0; i < array.length; i++) {
  console.log(array[i] + "\n");
}

console.log("\n");
var array2 = array.reverse();

for (var _i = 0; _i < array2.length; _i++) {
  console.log(array2[_i] + "\n");
}

console.log("\n");
var array3 = array.sort();

for (var _i2 = 0; _i2 < array3.length; _i2++) {
  console.log(array3[_i2] + "\n");
}

console.log("\n"); //OBJECT

var car = {
  brand: "Toyota",
  model: "CH-R",
  year: "2020"
};
var brand = car.brand;
var model = car.model;
var year = car.year;
console.log(brand + " " + model + " " + year + ".\n"); 

//GENERÁTOR
var randomNum = Math.floor(Math.random() * 556);
console.log("Náhodné číslo je: " + randomNum);