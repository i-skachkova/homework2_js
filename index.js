"use strict";

// 1
let tC = 25;
let tF;
tF = tC + 273;
console.log("Температура в градусах цельсія:", tC, "; температура в градусах Фаренгейта:", tF);

// 2
const daysInMay = 31;
const hoursInMay = daysInMay * 24;
const minutsInMay = hoursInMay * 60;
console.log("У травні", daysInMay,"день(днів),", hoursInMay, "годин(и) та", minutsInMay,"хвилин(и)");

// 3
let health = 100;
let energy = 100;
health -= 40;
energy -= 36;
console.log("Зараз ви маєте", health, "пунктів здоров'я та", energy, "пунктів енергії");

// 4
const price = 57626482;
const priceWithDiscount = price * 0.9;
console.log("Ціна зі знижкою 10% становить", Number(priceWithDiscount.toFixed(2)));

// 5
let temp1 = 18.02875289492848398503;
temp1 = Math.floor(temp1);
console.log(temp1);

// 6
let temp2 = "149.7248298493 I love cats! 2133 ^-^";
temp2 = Number.parseFloat(temp2);
console.log(temp2);

// 7
let temp3 = "18 I love cats! 2133 ^-^";
temp3 = Number.parseInt(temp3);
console.log(temp3);

// 8
const a = 256;
console.log("Квадратний корінь з числа", a, "становить", Math.sqrt(a));

// 9
const b = 1234;
const c = "12345";
console.log("Це - рядок, перетворений в число", Number.parseInt(c));
console.log("А це - число, перетворене в рядок", b.toString());