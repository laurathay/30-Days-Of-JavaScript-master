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

const hours = 40;
const ratePerHours = 28;
const weeklyEarning = 1120;

console.log(hours*ratePerHours);

//question 10 
// const gaga = gaga.length();
const gaga = 'Laura'; //à écrire comme ca car il faut une chaine de caractère et apres on introduit la condition 
if (gaga.length > 7 || gaga.length === 7) {
    console.log("you have a long name");
} else {
    console.log("your name is hort");
}

console.log(gaga);

// let prenom = lengthIsAbove7 ? "long name" : "short name";

// question 11 
const firstName = 'Laura';
const lastName = 'Thay';
if (firstName.length > lastName.length){
    console.log(('Your frist name,' + firstName + 'is longer than your family name,' + lastName));
} else {
    console.log(('Your frist name,' + firstName + 'is shorter than your family name,' + lastName));
}

//question 12
let myAge = 250;
let yourAge = 15;
let vraiAge = myAge - yourAge;
console.log('I am ' + vraiAge + ' older than you');

//question 13 
prompt 

let age = prompt('When were you born?');
if (age <= 18) {
    console.log('attendez encore un peu');
} else {
    console.log('vous avez le bon age, allez-y');
}

//question 14
let numberOfYears = prompt('enter number of yours you live');
let numerous = numberOfYears.getSeconds();
console.log(numerous);

