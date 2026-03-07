require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('khushaal22')
})

app.get('/instagram', (req,res) => {
    res.send('sangini_attri')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login to the website</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//if you can't login...stop the server ^c then run again using npm
//always restart after modifying your server 