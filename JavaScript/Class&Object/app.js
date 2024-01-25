// const student = {
//   fullName: 'Viraj Chauhan',
//   marks: 87,
//   marks2: 93,
//   printMark: function () {
//     console.log('marks = ', this.marks)
//   },
//   printMark2() {
//     console.log('marks =', this.marks2)
//   },
// }

// const Dharmik = {
//   marks3: 85,
// }

// Dharmik.__proto__ = student

// class ToyotaCar {
//   constructor(brand, mileage) {
//     console.log('Creating new Object')
//     this.brand = brand
//     this.mileage = mileage
//   }

//   start() {
//     console.log('start')
//   }
//   end() {
//     console.log('end')
//   }
//   // setBrand(brand) {
//   //   this.brandName = brand
//   // }
// }

// let fortuner = new ToyotaCar('fortuner', 10)
// let lexus = new ToyotaCar('lexus', 22)

// Inheritance
// class parent {
//   hello() {
//     console.log('hello')
//   }
// }

// class child extends parent {
//   hello() {
//     console.log('hello')
//   }
// }

// class person {
//   constructor() {
//     console.log('Enter the Parent Constructor')
//     this.species = 'homosapians'
//   }
//   eat() {
//     console.log('Person eats')
//   }
//   sleep() {
//     console.log('Person sleeps')
//   }
//   work() {
//     console.log('Do Nothing')
//   }
// }

// class engineer extends person {
//   constructor(branch) {
//     console.log('enter the child constructor')
//     super()
//     this.branch = branch
//     console.log('exit child constructor')
//   }
//   work() {
//     console.log('Solve Problems , build Something')
//   }
// }
// class doctor extends person {
//   work() {
//     console.log('Treat and heal patients')
//   }
// }

// let virajObj = new engineer('Computer Engineer')
// let virajObj1 = new doctor()
// let person1 = new person()

// class person {
//   constructor(name) {
//     this.species = 'homoSapiens'
//     this.name = name
//   }
// }

// class engineer extends person {
//   constructor(name) {
//     super(name)
//   }
// }

// let endobj = new engineer('shradha')

// Practice

// let Data = 'secret Information'

// class user {
//   constructor(name, email) {
//     this.name = name
//     this.email = email
//   }
//   viewData() {
//     console.log('getData = ', Data)
//   }
// }
// class admin extends user {
//   constructor(name, email) {
//     super(name, email)
//   }
//   editData() {
//     Data = 'some new Data'
//   }
// }

// let student1 = new user('viraj', 'abc@gmail.com')
// let student2 = new user('raj', 'abc@gmail.com')
// let Admin = new admin('suresh', 'raju@gmail.com')

// let a = 10
// let b = 5
// console.log('a = ', a)
// console.log('b = ', b)
// console.log('a + b = ', a + b)

// try {
//   console.log('a + c = ', a + c)
// } catch (err) {
//   // console.log(err)
//   err
// }
// console.log('a + b = ', a + b)
// console.log('a + b = ', a + b)
// console.log('a + b = ', a + b)

// console.log('one')
// console.log('Two')

// setTimeout(() => {
//   console.log('hello')
// }, 4000)

// console.log('three')
// console.log('four')

// function sum(a, b) {
//   console.log(a + b)
// }

// function calculator(a, b, sumCallBack) {
//   sumCallBack(a, b)
// }

// calculator(1, 2, sum)

// const hello = () => {
//   console.log('Hello')
// }

// setTimeout(hello, 3000)

// for (let i = 0; i < 5; i++) {
//   let str = ''
//   for (let j = 0; j < 5; j++) {
//     str = str + j
//   }
//   console.log(i, str)
// }

// function getData(dataId, getNextData) {
//   // console.log('data', dataId)
//   setTimeout(() => {
//     console.log('data', dataId)
//     if (getNextData) {
//       getNextData()
//     }
//   }, 2000)
// }

// CallBack hell Nested Call Back

// getData(1, () => {
//   getData(2,() => {
//    getData(3,() => {

//    })
//   })
// })
// getData(2)
// getData(3)

// Promise
// let promise = new Promise((resolve, reject) => {
//   console.log('I am a promise ')
//   resolve('sucess')
// })

// let promise1 = new Promise((resolve, reject) => {
//   console.log('It is rejected')
//   reject('failure')
// })

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data', dataId)
//       // resolve('sucess')
//       reject('error')
//       if (getNextData) {
//         getNextData()
//       }
//     }, 5000)
//   })
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log('I am a promise ')
//     resolve('sucess')
//   })
// }

// let promise = getPromise()
// promise.then((res) => {
//   console.log('promise fullfilled')
// })

// promise.catch((err) => {
//   console.log('rejected')
// })

// Promise Chaining
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data1')
//       resolve('sucess')
//     }, 3200)
//   })
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data2')
//       resolve('sucess')
//     }, 3200)
//   })
// }

// console.log('fetching data 1')
// let p1 = asyncFunc1()
// p1.then((res) => {
//   let p2 = asyncFunc2()
//   console.log('fetching data 2')
//   p2.then((res) => {})
// })

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data', dataId)
//       resolve('success')
//     }, 5000)
//   })
// }

// getData(1)
//   .then((res) => {
//     return getData(2)
//   })
//   .then((res) => {
//     return getData(3)
//   })
//   .then((res) => {
//     console.log(res)
//   })

// Async

// async function hello() {
//   console.log('Hello')
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Api is called Success')
//       resolve(200)
//     }, 2000)
//   })
// }

// async function getweatherData() {
//   await api() // 1st call
//   await api()
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data', dataId)
//       resolve('success')
//     }, 5000)
//   })
// }

// ;(async function () {
//   await getData(1)
//   await getData(2)
// })()

// API

const url = 'https://api.thecatapi.com/v1/images/search'
const urluse = document.querySelector('.url')
const button = document.querySelector('.img')

const getFact = async () => {
  console.log('gettting data ....')
  let response = await fetch(url)
  console.log(response)
  let data = await response.json()
  urluse.innerText = data[0].url
  console.log(data[0].url)
}

button.addEventListener('click', getFact)
