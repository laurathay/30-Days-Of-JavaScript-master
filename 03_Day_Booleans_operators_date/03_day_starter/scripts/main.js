// Exercise 1 

//question 5
console.log(4 > 3); //true oui
console.log(4 >= 3); //true oui
console.log(4 < 3); //false oui 
console.log(4 <= 3); //false oui 
console.log(4 == 4); //false non
console.log(4 === 4); //true oui
console.log(4 != 4); //false non
console.log(4 !== 4); //false oui
console.log(4 != '4'); //true non
console.log(4 == '4'); //false non car compare seulement les valeurs
console.log(4 === '4'); //false oui
//Find the length of python and jargon and make a falsy comparison statement.

console.log('stop');
//question 6 
console.log(4 > 3 && 10 < 12); //true oui 
console.log(4 > 3 && 10 > 12); //false oui 
console.log(4 > 3 || 10 < 12); //true oui 
console.log(4 > 3 || 10 > 12); //true oui
console.log(!(4 > 3)); //false oui 
console.log(!(4 < 3)); //true oui
console.log(!(false)); //undefined c'est true  
console.log(!(4 > 3 && 10 < 12)); //false oui 
console.log(!(4 > 3 && 10 > 12));//true oui 
console.log(!(4 === '4'));//true oui 

//There is no 'on' in both dragon and python, FALSE


//question 7

const now = new Date(); //a espacer
console.log(now);

const mois = new Date();
console.log(mois.getMonth()); //getMonth() a ne pas oublier

const today = new Date();
console.log(today.getDate());

const hour = new Date();
console.log(hour.getHours());

const minutes = new Date();
console.log(minutes.getMinutes());

const elapsed = new Date(1/1970);
console.log(elapsed.getSeconds());

// Exercice 2 

//question 1
const base = 20;
const height = 10;
const area = 0.5* 20*10;
// console.log((area / base) / height)
// console.log(area* base * height)

// x = 20 
// y = 10 
// z = 50 

// 50 = z * 20 * 10;
// (50/20)10 = z 

console.log(((area/base)/height));

//question 2 
const a = 5;
const b = 4;
const c = 3; 

const perimeter = a + b + c; 

// question 3 
// const length = x; 
// const width = y ;
// const perimeter = 2 * (length + width);
// const arectangle = length * width * perimeter;
// console.log(arectangle());

//question 4 

// radius ? 
// prompt 
// let pi = 3.14; 
// let area = pi * r * r 
// let circumference = 2 * pi * r;

// question 6 

m = (10-6/ 2-2); 
console.log(m);

// question 9 


