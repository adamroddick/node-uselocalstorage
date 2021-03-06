const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3001

const json = { 
    1: 'Adam',
    2: 'Ben',
    3: 'Daniel',
    4: 'Thomas' 
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
    //res.sendStatus(200).send({ json })
})


app.get('/json', (req, res) => {
    res.send(json)
})

app.listen(port, () => {
    console.log('Listening on port: '+ port)
})