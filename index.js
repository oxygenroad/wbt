const express = require( 'express')
const path = require( 'path')


const app = express()
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
   // res.send({ first : "hi" })
    })

app.listen(8080, () => {
    console.log( publicDirectoryPath +'Server is up on port 3000.')
    })