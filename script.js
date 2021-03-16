const express = require('express')
const app = express()

const routes = require('./routes')

// app.listen(1521, ()=>{
//     console.log('Server start on 1521 port')
// })

// GET, POST, PUT, DELETE

// CRUD - Create, Read, Update, Delete


// MVC 

// Models
// View
// Controller

app.get('/', (req, res)=>{
    return res.json('OK')
})

app.use(routes)


app.get('/profile', (req, res)=>{
    return res.status(200).json('profile page respose')
})

app.get('*', (req, res)=>{
    return res.status(404).json('404 NOT FOUND')
})


app.listen(1521, function(){
    console.log('Server start on 1521 port')
})