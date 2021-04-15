// // function name(params) {
// //     body
// // }

// function sayHello() {
//     alert('Привет функция')
// }

// function sum(num1, num2) {
//     alert(num1 + num2)
// }

// function inviteGen() {
//     const name = document.getElementById('client-name').value
//     alert(`Здравствуйте, ${name} приглашем вас посетить наше заведение!!`)
// }

// // function fullName(firstN, secondN, thirdN) {
// //     return `Your Full Name: ${firstN} ${secondN} ${thirdN}`
// // }

// // let f = fullName('My Name', 'SurName222', '11122233')
// // let inp = prompt('Enter name')
// // alert(f + inp)

// function fillArray(arr, size) {
//     for (let i = 0; i < size; i++) {
//         let rand = Math.floor(Math.random() * 50)
//         arr.push(rand)
//     }
//     return arr
// }


// let myArr = [], sndArr  = [], personArr = []

// myArr = fillArray(myArr, 50)
// sndArr = fillArray(sndArr, 12)
// personArr = fillArray(personArr, 32)

// console.log(myArr)
// console.log(sndArr)
// console.log(personArr)

// // тэг в котором выводиться кол
// const countOut = document.querySelector('#countOut')
// // переменная для хранения кол
// let count = 0
// // функция в которым мы меняем кол.
// function countIncDec(n) {
//     // ув. на 1 или ум. на 1
//     count += n
//     countOut.innerHTML = count
// }







// // alert() - function
// // console.log() - method
// // Math.sqrt() - method
 

// // sayHello() вызов функций

// // while(true) {
// //     console.log(123)
// // }

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [11, 22, 33, 44]
// let arr3 = [32, 12, 54, 77]
// let arr4 = [98, -212, 332, 11]
// let sum = [21, 122,42]

// sumArray(arr)
// sumArray(arr2)
// sumArray(arr3)
// sumArray(arr4)
// sumArray(sum)

// function sumArray(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log('Sum', sum)
// }


// function test(Sergey) {
//     console.log(Sergey, typeof(Sergey))
// }

// let qwe = 1111

// test('Hello')   
// test(1234)   
// test([1, 321, 234, 55])   
// test(2.4)   
// test(qwe)   



let arr = []

arr = fillArray2(arr, 10, 13, 65)

function fillArray2(arr, size, from, to) {

    for (let i = 0; i < size; i++) {
        let rand = Math.floor(Math.random() * (to - from) + from)
        arr.push(rand)
    }

    return arr
}