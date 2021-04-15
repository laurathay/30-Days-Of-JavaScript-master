// this is your main.js script

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

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.search('because'));

console.log(challenge.startsWith(('30')));
console.log(challenge.repeat(2));

console.log('The quote  \'There is no exercise better for the heart than reaching down and lifting people up. \'  by John Holmes teaches us to help one another.');
