// Ex.1 

//question 1
const ageRequis = 18;
const age = prompt("Enter your age");
if (age >= ageRequis) {
    console.log('Your are old enough to drive');
} else {
    (ageRequis - age)
    console.log(`Wait for ${ageRequis - age}  long fucking years `); //guillemet inversé avec le dollar
};


//question 2 
const myAge = 30;
const yourAge = prompt("Comparons ton age et le mien");
if(myAge > yourAge) {
    console.log('je suis la plus grande!');
} else {
    (yourAge - myAge)
    console.log(`petit padawan a grandit de ${myAge - yourAge}`);
}

//question 3 
let a = 4;
let b = 3;
if (a > b){
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

let aGreaterThanB = true;
aGreaterThanB
 ? console.log('a is greater than b')
 : console.log('a is less than b')

//question 4
const evenNumber = prompt('rentre un nombre');
if ((evenNumber % 2) === 0){
   console.log(`${evenNumber} is an even number`); 
} else {
    console.log(`${evenNumber} isn't an even number`);
}

//Exercise 2 
// question 1 
// cette partie bloque a cause de la syntaxe ...
// let grade = prompt('donne une note');

// if (grade >= 80  || grade <= 100){
//     console.log('you get A');
// } else (grade >= 70 || grade <= 89){
//     console.log('you get B');
// } else if (grade >= 60 || grade <= 69){
//     console.log('you get C');
// } else if (grade >= 50 || grade <= 59){
//     console.log('you get D');
// } else  (grade >= 0 || grade <= 49){
//     console.log('you get E');
// };


// j'ai re essayé avec switch qui marche mais qui me donne tout le temps le default ...
// let grade = prompt('Enter a grade');
// switch (grade) {
//   case (grade >= 80  || grade <= 100):
//     console.log('A');
//     break;
//   case (grade >= 70 || grade <= 89):
//     console.log('B');
//     break;
//   case (grade >= 60 || grade <= 69):
//     console.log('C');
//     break;
//   case (grade >= 50 || grade <= 59):
//     console.log('D');
//     break;
//   default:
//     console.log('pas de notes');
// }

//question 2 

//  const season = prompt('donne un mois, je te dis ta saison');
// if season = September || October || November {
//     console.log ('season is Autumn');
// } else {

// }
let seasonUserInput = prompt('donne un mois, je te dis ta saison')
let season = seasonUserInput.toLowerCase()

switch (season) { // a faire pour tout les autres mois mais flemmes
  case 'january':
    console.log('its winter bitches')
    break
  case 'february':
    console.log('its winter bitches')
    break
  case 'march':
    console.log('its spingooo')
    break
  case 'april':
    console.log('its spingooo')
    break
  default:
    console.log('It is not a season.')
}

//question 3 
let today = prompt('what is the day today ?')
if (today ===  0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}


//Exercise 3 
// question 1 
let monthUserInput = prompt('What month is this ?')
let month = monthUserInput.toLowerCase()

switch (month) {
  case 'january':
    console.log('January has 31 days')
    break
  case 'february':
    console.log('February has 30 days')
    break
  case 'march':
    console.log('March has 31 days')
    break
  case 'april':
    console.log('April has 30 days')
    break
  case 'may':
    console.log('May has 31 days')
    break
  case 'june':
    console.log('June has 30 days')
    break
  case 'july':
    console.log('July has 31 days')
    break
  case 'august':
    console.log('August has 30 days')
    break
  case 'september':
    console.log('September has 31 days')
    break
  case 'october':
    console.log('October has 3 days')
    break
  case 'november':
    console.log('December has 30 days')
    break
  case 'december':
        console.log('December has 31 days')
    break
  default:
    console.log('It is not a month.')
}

//a faire avec leap year