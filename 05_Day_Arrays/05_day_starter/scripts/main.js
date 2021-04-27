//Exercise 1

//question 1
let arr = Array()
console.log(arr)

//question 2
const number5 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia'
  ]
console.log(number5)

//question 3
const fiveXvalues = Array(5).fill(5)
console.log(fiveXvalues.length)

//question 4 
let firstXvalues = number5[0]
console.log(firstXvalues)

let middleXvalues = number5[2]
console.log(middleXvalues)

let lastXvalues = number5[4]
console.log(lastXvalues)

//question 5
let mixedDataTypes = [
    'caca',
    9,
    true,
    'prout',
    10
]
console.log(mixedDataTypes.length)

//question 6 
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Amazon'
]
// question 7
console.log(itCompanies);

//question 8
console.log(itCompanies.length);

//question 9
console.log(itCompanies[0])
console.log(itCompanies[2])
console.log(itCompanies[5])

//question 10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])

//question 11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())

//question 12
console.log(itCompanies[0] + ',' + itCompanies[1] + ',' + itCompanies[2] + ',' + itCompanies[3] + 'and' + itCompanies[4]  + ' are big IT companies')

//question `13
// if exist in itCompanies : {
//     return.itCompanies 
// } else {
//     return.('Company is not found')
// }

const companiiies = ['facebook', 'apple', 'ibm', 'pfizer']
let index = companiiies.indexOf('apple')  // 0

index != -1 ? console.log('This company does exist in the array'): console.log('This company does not exist in the array')

//question 14.Filter out companies which have more than one 'o' without the filter method

// if companiiies.includes('oo'){
//     console.log()
// }
//question 15.Sort the array using sort() method
companiiies.sort()
console.log(companiiies)

//question 16.Reverse the array using reverse() method
companiiies.reverse()
console.log(companiiies)
//question 17.Slice out the first 3 companies from the array
console.log(companiiies.splice(0, 3))
//question 18.Slice out the last 3 companies from the array
console.log(companiiies.splice(2, 3))

//question 19.Slice out the middle IT company or companies from the array
console.log(itCompanies.splice(2, 1))
//question 20.Remove the first IT company from the array
console.log(itCompanies.splice(0, 1))
//question 21.Remove the middle IT company or companies from the array
//c'est tout le temps pareil
//question 22.Remove the last IT company from the array

//question 23.Remove all IT companies




//Ex 2
// importScripts.countries.js
// importScripts(URL:countries)

import 'web_tech.js';

console.log(webTechs())