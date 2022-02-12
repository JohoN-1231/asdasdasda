// let son = 10;
// let sum = '';
// for (let i = 1; i < son; i++) {
//     for (let j = i; j < son; j++) {
//         sum += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         sum += '* ';
//     }

//     console.log(sum);
//     sum = '';
// }


// let son2 = 9;
// let sum2 = '';
// for (let i = 1; i < son2; i++) {
//     for (let j = 1; j <= i; j++) {
//         sum2 += ' ';
//     }
//     for (let k = i; k < son2; k++) {
//         sum2 += ' *';
//     }
//     console.log(sum2);
//     sum2 = "";
// }

"use strict";

// text();

// function text() {
//     console.log('salom');
// }

// declaration function
// let Akbar = workerSalary(3000000)
// let Mahmud = workerSalary(5000000)
// let Laziz = workerSalary(10000000)
// console.log(Akbar, Mahmud, Laziz);
// function workerSalary(salary) {
//     let tax = (salary / 100) * 16;
//     return tax;
// }

// expression function
// const updater = function(){
//     console.log('salom');
// };
// updater();

// ES6 (chyziqi, arrow, strelochniy) arrow function
// function calc() {
//     console.log('salom');
// }

// let calc = a => a;
// let calc = a => {
//     console.log('salom');
// return a;
// }
// console.log(calc(3));

// let add = (x, y) =>  x + y;
// console.log(add(3, 5));

// let filter = (num) => num >= 0
// console.log(filter(1)); 

// let randomm = () => Math.rendom();

// document.addEventListener('click', () => console.log("salom")); 

// console.log(Math.floor(Math.random * 100));

// function random(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min);
// }


// let minNum = +prompt("Minimum sonni kiriting")
// let maxNum = +prompt("Maxsimum sonni kiriting")

// for (let i = 0; i < 5; i++) {
// let num1 = random(minNum, maxNum);
// let num2 = random(minNum, maxNum);    

// let pr = +prompt(num1 + " + " + num2 + " = ")
// let answer = (num1 + num2) == pr ? "Togri": "Xato";
// alert(num1 + " + " + num2 + " = " + (num1 + num2) + " Sizning Javob " + pr + '. ' + answer);
// }