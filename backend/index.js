const pool = require('./db-pool');
const express = require('express')
const cors = require('cors')
const app = express()

const port = 3001 /// process.env.PORT instead of hardcode
app.use(cors())
app.options('*', cors())
app.use(express.json());

app.get('/', (req, res) => {

    /* pool method makes request for picstures from the db */

    pool.query('SELECT * FROM pets', (error, results) => {
        if (error) {

            res.status(500)
            throw error
        }
        else {
            res.status(200).json(results.rows)
        }
    })

})

app.post('/login', (req, res) => {

    console.log("ENDPOINT PLZ")
    /*pool method takes inc params and execute thier resp methods */

})

app.get('/username', (req, res) => {

    /* pool method makes request for pictures from db */

})



app.listen(port, () => {

    console.log(`App running on port ${port}.`)

})