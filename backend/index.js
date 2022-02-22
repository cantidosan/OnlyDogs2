import { response } from 'express';
import pool from './db-pool';

const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
    /* pool method makes request for picstures from the db */
    pool.query('SELECT * FROM pet_profile', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })

})

app.post('/login', (req, res) => {

    /*pool method takes inc params and execute thier resp methods */

})

app.get('/username', (req, res) => {

    /* pool method makes request for pictures from db */

})



app.listen(port, () => {

    console.log(`App running on port ${port}.`)

})