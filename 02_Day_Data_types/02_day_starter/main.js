// this is your main.js script
//EX.1
let challenge = '30 days of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(1));
console.log(challenge.substring(3,22));
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(', '))
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

//EX2
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.search('because'));

console.log(challenge.startsWith(('30')));
console.log(challenge.repeat(2));

console.log('The quote  \'There is no exercise better for the heart than reaching down and lifting people up. \'  by John Holmes teaches us to help one another.');
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

let num = '10';
let numInt = parseInt(num);
console.log(num); //10

console.log(Math.round(9.81));

let number = '9.8';
let numberbis = parseInt(number);
console.log(numberbis);

let string = ('python', 'jargon');
console.log(string.includes('on'));

console.log(num = parseFloat(9.8));

let vatefaire = 'I hope this course is not full of jargon';
console.log(vatefaire.includes('jargon'));

const valeur = Math.floor(Math.random ()* 100);
console.log(valeur);
//
// You need to know the range of the random.
// Between 50 and 80, the range is 30 (80 - 50 = 30), then you add 1.
// Therefor, the random would look like this :
// Math.floor(Math.random() * 31) + 50
//
const valeurbis = Math.floor(Math.random()*51) + 50;
console.log(valeurbis);

const tableau =('1 1 1 1 1 2 1 2 4 8 3 1 3 9 27 4 1 4 16 64 5 1 5 25 125'); //irrésolu, je ne sais pas comment le mettre en cadriller
console.log(tableau.split(''));

let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substr('because because because')); //pour supprimer il faut mettre le numero de string
console.log(phrase.substr(30,31));

//EX.3

let lovesentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(lovesentence.match('love'));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.trim('%, $, @, #'))