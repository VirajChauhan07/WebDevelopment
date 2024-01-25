// console.log('Hello')
// alert('We are going to India Virtually ')

// console.log(document.body)
// console.dir(document.body)

// Document.getElementByID
// let heading = document.getElementById('heading')
// console.log(heading)

// Document.getElementByClassName
// let headingClass = document.getElementsByClassName('heading')
// console.dir(headingClass)
// console.log(headingClass)

// Document.getElementsByTagName
// let para = document.getElementsByTagName('p')
// console.dir(para)
// console.log(para)

// Query Selector all
// let allEle = document.querySelectorAll('p')
// console.log(allEle)

// QuerySelector
// let firstElement = document.querySelector('h1')
// console.log(firstElement)

// // For classes
// let classes = document.querySelectorAll('.heading')
// console.log(classes)

// for id
// let ID = document.querySelector('#heading')
// console.log(ID)

// children
// let child = document.querySelector('div').children
// console.log(child)

// innerHtml
// let A = document.querySelector('div')
// console.dir(A)

// Practice
// let heading = document.querySelector('h2')
// console.dir(heading.innerText)
// heading.innerText = heading.innerText + ' from apna college students'
// console.log(heading)

// let boxes = document.querySelectorAll('.box')

// let i = 1
// for (div of boxes) {
//   div.innerText = `new unique value ${i}`
//   i++
// }
// boxes[0].innerText = 'new unique value1'
// boxes[1].innerText = 'new unique value2'
// boxes[2].innerText = 'new unique value3'

// Attributes
// let id = document.querySelector('div')
// console.log(id)

// let val = id.getAttribute('id')
// console.log(val)

// let para = document.querySelector('p')
// console.log(para.setAttribute('class', 'newClass'))

// Style
// let div = document.querySelector('div')
// console.log(div)
// div.style.backgroundColor = 'lightGreen'
// div.style.fontSize = '20px'
// div.innerText = 'Working Properly'

// Create Element  Insert Remove
// let newBtn = document.createElement('button')
// newBtn.innerText = 'click me!'
// console.log(newBtn)

// let divi = document.querySelector('div')
// divi.appendChild(newBtn)
// divi.prepend(newBtn)
// divi.before(newBtn)

// let li = document.querySelector('li')
// li.after(newBtn)

// let id = document.querySelector('div')
// console.log(id)
// id.style.height = '200px'
// id.style.width = '150px'

// let newHeading = document.createElement('h1')
// newHeading.innerHTML = '<i>Hi I am new Here!</i>'

// document.querySelector('body').prepend(newHeading)

// newBtn.remove()
// let newButton = document.createElement('button')
// console.log(newButton)
// newButton.innerText = 'Click Me !'
// newButton.style.backgroundColor = 'red'
// newButton.style.color = 'white'

// document.body.append(newButton)

// let para = document.querySelector('p')
// console.log(para)
// // newpara.setAttribute('class', 'newpara')
// para.classList.add('newpara')

// Event handling removing and adding eventhandler
// btn.onclick = () => {
//   console.log('Button was clicked')
//   let a = 26
//   a++
//   console.log(a)
// }

// let div = document.querySelector('div')
// div.onmouseover = () => {
//   console.log('Mover hover the div')
// }
// btn.onclick = (e) => {
//   console.log(e)
//   console.log(e.type)
//   console.log(e.target)
//   console.log(e.clientX, e.clientY)
// }

// btn.addEventListener('click', () => {
//   console.log('Button 1 was clicked - handler1')
// })

// btn.addEventListener('click', () => {
//   console.log('Button 1 was clicked - handler2 ')
// })
// btn.addEventListener('click', () => {
//   console.log('Button 1 was clicked - handler3 ')
// })

// const handler3 = () => {
//   console.log('Button was Clicked - handler3')
// }

// btn.addEventListener('click', handler3)

// btn.addEventListener('click', () => {
//   console.log('Button 1 was clicked - handler4 ')
// })

// btn.removeEventListener('click', handler3)

// Practice(Light and dark mode)

let modeChange = document.querySelector('#modeChange')
let body = document.querySelector('body')
let currMode = 'light'

modeChange.addEventListener('click', () => {
  if (currMode === 'light') {
    currMode = 'dark'
    body.classList.add('dark')
    body.classList.remove('light')
    // body.style.backgroundColor = 'black'
  } else {
    currMode = 'light'
    body.classList.add('light')
    body.classList.remove('dark')
    // body.style.backgroundColor = 'white'
  }
  console.log(currMode)
})
