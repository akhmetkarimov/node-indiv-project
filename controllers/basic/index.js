exports.loop = (req, res) => {
    // let doc = 1
    // let out = ''
    // while (100 >= doc) {
    //     out += `Document ${doc} Moved\n`
    //     doc++
    // }
    // console.log(out)

    // for(начало; условие; действие) {
    //     тело
    // }

    // let forOut = ''
    
    // for (let d = 1; d <= 100; d++) {
    //     forOut += `<p> Document ${d} Moved (FOR) </p> \n`
    // }

    // console.log(forOut)
    
    // res.send(forOut)

    // 1) d = 1
    // 2) 1 <= 100 true
    // 3) console.log()
    // 4) d++  2

    // 1) d = 2
    // 2) 2 <= 100 true
    // 3) console.log()
    // 4) d++  3


    // 1) d = 101
    // 2) 101 <= 100 false
    // 3) console.log() X
    // 4) d++  3 X

    // return res.json('ok')


    // [] - array
    // {} - object 
    // let item = [] - array
    // 0, 1, 2, 3
    
    // item[0] Sergey

    // let item = {} - object
    // key: value
    // {
    //    name: "Sergey"
    // }

    // item.name "Sergey"
    // item['name'] "Sergey"
}


exports.arrays = (req, res) => {
    // let arrName = [10, 22, 1023, 44]
    // console.log(arrName)

    // for (let i = 0; i < 4; i++) {
    //     console.log('In Loop', arrName[i])
    // }

    // let size = Math.floor(Math.random() * 10)

    // Math.floor(3.9) -> 3
    // Math.ceil(3.1) -> 4
    // Math.round(3.3) -> 3
    // Math.round(3.6) -> 4

    // Math.random() 0.1234123
    // * 20 = 2.231234
    // Math.floor() => 2

    // 0.3 -> 3
    // 0.3 -> 6

    // let randArr = []

    // for (let i = 0; i < size; i++) {
    //     randArr[i] =  Math.floor(Math.random() * 100)
    // }

    // console.log(randArr)

    // Добавление в конец массива
    // [22, 12, 76]
    // arrName.push(89)
    // [22, 12, 76, 89, 89, 12, 422]

    // Удаление с конца массива
    // arrName.pop()

    // Добавление в начало массива
    // [22, 12, 76]
    // arrName.unshift(89)
    // [89, 22, 12, 76]

    // Удаление с начало массива
    // arrName.shift()

    // Удаление определенного элемента по индексу
    // arrName.splice(index, 1)


    // start = 10
    // end = 30 
    // Math.floor(Math.random() * (end - start) + start)


    // photos = ['photo1.png', 'photo2.jpg', 'photo.jpg', 'photo4.png']
    // pngs = []
    // jpgs = []

    // photos[i]

    // []
    // push(23) 
    // [23]
    // push(54)
    // [23, 54]
    // push(453)
    // [23, 54, 453]

    // [] -> string
    // [123, 123, 123]
    // 'hello'

    return res.json('ok')
}

