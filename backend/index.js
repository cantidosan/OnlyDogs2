const pool = require('./db-pool');
const express = require('express')
const cors = require('cors')
const app = express()

const port = 3001 /// process.env.PORT instead of hardcode
app.use(cors())
app.options('*', cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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


const credential = []


app.post('/login', (req, res) => {

    const { username } = req.body;
    console.log(username)
    const loginQuery = `SELECT username FROM users WHERE username = '${username}';`
    /*pool method takes inc params and execute thier resp methods */


    pool.query(loginQuery, (error, results) => {
        if (error) {
            ///res.status(500)
            ///console.log('login error')
        }
        else {
            res.json({ message: results })
        }


    })



})

app.get('/username', (req, res) => {

    /* pool method makes request for pictures from db */

})



app.listen(port, () => {

    console.log(`App running on port ${port}.`)

})