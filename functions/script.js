// function name(params) {
//     body
// }

function sayHello() {
    alert('Привет функция')
}

function sum(num1, num2) {
    alert(num1 + num2)
}

function inviteGen() {
    const name = document.getElementById('client-name').value
    alert(`Здравствуйте, ${name} приглашем вас посетить наше заведение!!`)
}

// function fullName(firstN, secondN, thirdN) {
//     return `Your Full Name: ${firstN} ${secondN} ${thirdN}`
// }

// let f = fullName('My Name', 'SurName222', '11122233')
// let inp = prompt('Enter name')
// alert(f + inp)


function fillArray(arr, size) {
    for (let i = 0; i < size; i++) {
        let rand = Math.floor(Math.random() * 50)
        arr.push(rand)
    }
    return arr
}

let myArr = [], sndArr  = [], personArr = []

myArr = fillArray(myArr, 50)
sndArr = fillArray(sndArr, 12)
personArr = fillArray(personArr, 32)

console.log(myArr)
console.log(sndArr)
console.log(personArr)

// тэг в котором выводиться кол
const countOut = document.querySelector('#countOut')
// переменная для хранения кол
let count = 0
// функция в которым мы меняем кол.
function countIncDec(n) {
    // ув. на 1 или ум. на 1
    count += n
    countOut.innerHTML = count
}









// alert() - function
// console.log() - method
// Math.sqrt() - method
 

// sayHello() вызов функций

// while(true) {
//     console.log(123)
// }