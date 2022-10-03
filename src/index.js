//ARRAY
let array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
for (let i = 0; i < array.length; i++) {
  console.log(array[i] + "\n");
}

console.log("\n");

let array2 = array.reverse();
for (let i = 0; i < array2.length; i++) {
  console.log(array2[i] + "\n");
}

console.log("\n");

let array3 = array.sort();
for (let i = 0; i < array3.length; i++) {
  console.log(array3[i] + "\n");
}

console.log("\n");

//OBJECT
let car = {
  brand: "Toyota",
  model: "CH-R",
  year:  "2020",
};

let brand = car.brand;
let model = car.model;
let year = car.year;

console.log(brand + " " + model + " " + year + ".\n");

//GENERÁTOR
let randomNum = Math.floor(Math.random() * 556);
console.log("Náhodné číslo je: " + randomNum);

