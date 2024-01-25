// console.log('Viraj Chauhan')
// console.log('javascript is a easy language')

// Variable
// let name = 'Viraj' // let keyword used for declaring variable in javascript
// console.log(Name)
// var age = 25 // var keyword also used to declare the variables but it's
// not recommended because of its scope issue, so use "let" instead of "var".
// const gender = 'Male' // constant value cannot be changed once assigned
// using const keyword
// Data Types In JavaScript
// Number: It can store both integer and floating point values like -10, 34
// String: It stores text data i.e., string values like "Hello World",
//         'Hello World', `Hello World`
// Boolean: It represents true or false values only.
// Null: Used to indicate that something is empty/null.
// Undefined: Indicates an uninitialized variable.
// Object: A collection of properties. Example {name:'Viraj',age:25
//          }
// Array: An ordered list of items. [1,2,3,'hello']
// Function: A piece of code which performs a specific task.
// Type Conversion
// Parsing: Convert one data type into another data type.
// Casting : Explicitly convert one data type into another data type.
// Operators
// Arithmetic operators +,-,*,/,%
// Comparison operators ==, !=, >, < , >=, <=
// Logical operators && (AND), ||(OR)
// Assignment operator =
// Bitwise operators &, |, ^
// Task 1
// Print your Name on Console
// console.log(`My Name Is ${name}`)
// Task 2
// Print Your Age On Console
// console.log('I am ' + age + ' Years Old')
// Task 3
// Check Whether Gender Is Male Or Not ?
// if (gender === 'Male') {
//   console.log('Yes, I Am Male')
// } else {
//   console.log('No, I Am Female')
// }
// Task 4
// Declare A Variable And Store The Sum Of Age And 5 In It
// let sum = age + 5
// console.log(`The Sum Of My Age And 5 Is ${sum}`)
// Task 5
// Use If Else Condition To Find Out Whether The Person Is Married Or Not ?
// if (married === 'Married') {
//   console.log('Yes, I Am Married')
// } else {
//   console.log('No, I Am Single')
// }

// const student = {
//   fullName: 'Viraj Chauhan',
//   age: 20,
//   cgpa: 8.2,
//   isPass: true,
// }

// student['fullName'] = 'Rahul sharma '
// console.log(student.age)

// const product = {
//   name: 'Parker Joter Standard ',
//   rating: 4,
//   deal: true,
//   price: 270,
//   offer: 5,
// }

// console.log(product)

/*const profile = {
  id: '@shradhaKhapra',
  isfollow: true,
  NoOfPost: 198,
  followers: 569000,
  following: 4,
  details:
    'Apna College | Ex-Microsoft | DRDO to Educate Someone is a highest privelege',
}
console.log(profile)*/

/*let a = 4
let b = 3

console.log('a + b = ', a + b)
console.log('a - b = ', a - b)
console.log('a * b = ', a * b)
console.log('a / b = ', a / b)
console.log('a % b = ', a % b)
console.log('a ** b = ', a ** b)
console.log('a++ = ', a++)
console.log('a-- = ', a--)*/

/*let a = 5
let b = '5'

console.log('5 == 5 ', a == b)
console.log('5 === 5 ', a === b)
console.log('5 > 5', a > b)*/

/*let a = 5
let b = 4

console.log('cond1 || cond2', a > b || a == b)*/

/*let age = 25

if (age > 18) {
  console.log('You are eligible to vote ')
} else {
  console.log('You are not eligible to mode')
}

let mode = 'dark'
let color

if (mode === 'dark') {
  color = 'black'
} else {
  color = 'white'
}

console.log(color)
*/

// Practice 1
/*let number = prompt('What is your Number?')
if (number / 5) {
  alert('Number Divisible By 5')
} else {
  alert('Number not Divisible by 5')
}*/

// Practice 2

/*let score = prompt('enter your marks')
if (score >= 90 && score <= 100) {
  alert('You got A Grade ')
} else if (score >= 70 && score <= 89) {
  alert('You got B Grade ')
} else if (score >= 60 && score <= 69) {
  alert('You got C  Grade')
} else if (score >= 50 && score <= 59) {
  alert('You got D Grade')
} else if (score >= 0 && score <= 49) {
  alert('Your got E Grade')
}*/

// loops
// Print 1 to 5
// for Loop
/*for (let i = 0; i <= 5; i++) {
  console.log(i)
}*/

// while Loop
/*let i = 1
while (i <= 5) {
  console.log('i = ', i)
  i++
}*/

// Do while loop

/*let i = 20
do {
  console.log('i = ', i)
  i++
} while (i <= 10)*/

// For of Loop

// let string = 'Viraj'
// let size = 0
// for (let i of string) {
//   console.log(i)
//   size++
// }

// console.log('Size of String is ', size)

// for in Loop

// let Student = {
//   name: 'Vaibhav Mishra',
//   age: 22,
//   cgpa: 9.5,
//   isPass: true,
// }

// for (let key in Student) {
//   console.log('Key = ', key, 'Value is ', Student[key])
// }

// Print all even numbers from 0 to 100

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 == 0) {
//     console.log(num)
//   }
// }

// Game number Guessing

// let randomNumber = 25

// let guess = prompt('Enter any number to Guess')
// while (guess != randomNumber) {
//   guess = prompt('You entered the  wrong number ! guess again ')
// }

// alert('congratulation you have selected the right number')

// String
// let str = 'Viraj Chauhan'
// console.log(str.length)
// console.log(str[4])

// Template literals

// let specialString = `This is a special string`
// console.log(typeof specialString)

// let obj = {
//   name: 'Pen',
//   price: 10,
//   quantity: 5,
// }

// console.log(
//   `The cost of ${obj.name} ${obj.price} and we have ${obj.quantity} in stock`
// )

// let str = 'virajchauhan'
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// let str1 = '         Brillant Person Ever                '
// console.log(str1.trim())

// let str = 'Viraj'
// console.log(str.slice(0, 2))
// let str2 = 'Chauhan'
// console.log(str.concat(str2))
// console.log(str.replace('V', 'N'))
// console.log(str.charAt(0))

// Practice Question

// let userName = prompt('Enter Your Full Name')
// let length = userName.length
// let fullName = `@${userName}${length}`
// alert(fullName)

// let marks = [45, 85, 69, 89, 98, 100]
// console.log(marks)
// console.log(typeof marks)

// let heroes = [
//   'Ironman',
//   'CaptainAmerica',
//   'Hulk',
//   'Dr.Strange',
//   'SpiderMan',
//   'Thor',
//   'Loki',
// ]
// // For
// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i])
// }
// // for of
// for (let hero of heroes) {
//   console.log(hero)
// }

// Practice

// let marks = [85, 97, 44, 37, 76, 60]
// let avg
// let total = 0
// for (let val of marks) {
//   total += val
// }

// avg = total / marks.length
// console.log('Average Marks of Class is ', avg)

// Practice
// let price = [250, 645, 300, 900, 50]
// let discount = 20
// let i = 0
// for (let val of price) {
//   console.log(`Value at Index ${i} = ${val}`)
//   offer = discount / 100
//   val = val * offer
//   price[i] = price[i] - val
//   console.log(`Value after offer ${i} = ${price[i]}`)
//   i++
// }

// Arrays push pop tostring()

// let foodItems = ['Panner', 'samosa', 'breadpakoda', 'soyastick', 'mohanthal']
// foodItems.push('pizza', 'burger', 'sandwich', 'apple')
// console.log(foodItems)
// foodItems.pop()
// console.log(foodItems)
// console.log(foodItems.toString())
// console.log(foodItems)

// Array concat shift unshift

// let marvelHeroes = ['IronMan', 'DrStrange', 'thor']
// let dcHeroes = ['Superman', 'Batman', 'Aquaman']

// let heroes = marvelHeroes.concat(dcHeroes)
// heroes.unshift('wandaMaximoff')
// heroes.shift()
// console.log(heroes)

// Array splice and slice

// let marvelHeroes = [
//   'IronMan',
//   'DrStrange',
//   'thor',
//   'hawkeye',
//   'CaptainAmerica',
//   'BlackWidow',
// ]

// console.log(marvelHeroes.slice(1))
// console.log(marvelHeroes.splice(1, 1, 'hulk'))
// console.log(marvelHeroes)

// Practice

// let companies = ['bloomberg', 'Microsoft', 'uber', 'google', 'IBM', 'Netflix']

// console.log(companies.shift())
// console.log(companies.splice(1, 1, 'ola'))
// console.log(companies)
// companies.push('Amazon')
// console.log(companies)

// function
// function myFunction() {
//   console.log('Welcome to My WebSite')
//   console.log('We are learning JS')
// }

// myFunction()

// function sum(a, b) {
//   return a + b
// }

// const arrowSum = (a, b) => {
//   console.log(a + b)
// }

// function mul(a, b) {
//   return a * b
// }

// Practice

// let str = 'Viraj'

// function VowelCounter(str) {
//   let count = 0
//   for (let val of str) {
//     if (
//       val === 'a' ||
//       val === 'e' ||
//       val === 'i' ||
//       val === 'o' ||
//       val === 'u'
//     ) {
//       count++
//     }
//   }
//   console.log(count)
// }

// VowelCounter(str)

// const vowelCounter = (str) => {
//   let count = 0
//   for (let val of str) {
//     if (
//       val === 'a' ||
//       val === 'e' ||
//       val === 'i' ||
//       val === 'o' ||
//       val === 'u'
//     ) {
//       count++
//     }
//   }
//   console.log(count)
// }

// vowelCounter('oiraj')

// For each in array

// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function printVal(val) {
//   console.log(val)
// })

// arr.forEach((val) => {
//   console.log(val)
// })

// arr.forEach((val, index, arr) => {
//   console.log(val, index, arr)
// })

// Practice
// Map , filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let evenArr = arr.filter((val) => {
//   return val % 2 === 0
// })
// console.log(evenArr)

// let newArr = arr.map((val) => {
//   return val
// })

// let calcSquare = (val) => {
//   val *= val
//   console.log(val)
// }
// console.log(newArr)

// arr.forEach(calcSquare)

// Reduce Method
// let intialValue = 0
// let sum = arr.reduce((result, val) => {
//   return result + val
// })

// let largeNumber = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr
// })
// console.log('Largest number is : ', largeNumber)
// console.log('The Sum of array is : ', sum)

// let smallNumber = arr.reduce((prev, curr) => {
//   return prev < curr ? prev : curr
// })

// console.log('The smallest number is : ', smallNumber)

// Practice
// let marks = [85, 81, 86, 91, 98, 92]

// let highestMark = marks.filter((val) => {
//   return val >= 90
// })
// console.log(highestMark)

// Practice

// let n = prompt('Enter the value for N number of element in array')
// let array = []
// for (let i = 1; i <= n; i++) {
//   array[i - 1] = i
// }
// console.log(array)

// let sum = array.reduce((res, val) => {
//   return res + val
// })

// console.log('Sum = ', sum)

// let product = array.reduce((prev, curr) => {
//   return prev * curr
// })

// console.log('Factorial = ', product)
