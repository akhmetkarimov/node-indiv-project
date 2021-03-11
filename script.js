const express = require('express')
const app = express()


// app.listen(1521, ()=>{
//     console.log('Server start on 1521 port')
// })

// GET, POST, PUT, DELETE

// CRUD - Create, Read, Update, Delete

app.get('/', (req, res)=>{
    return res.json('OK')
})

app.get('/profile', (req, res)=>{
    return res.status(200).json('profile page respose')
})

app.get('*', (req, res)=>{
    return res.status(404).json('404 NOT FOUND')
})

app.listen(1521, function(){
    console.log('Server start on 1521 port')
})


