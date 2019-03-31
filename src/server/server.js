const express = require('express')
const app = express()
const books = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/books', (req, res) => {
    res.json(books)
})

app.listen(4000, () => {
    console.log('Start server at port 4000.')
})