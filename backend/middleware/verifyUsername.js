const pool = require('../db-pool');

module.exports = function verifyUsername(req, res, next) {

    const { username, password } = req.body;

    const findUserQuery = `Select * from users
                            WHERE users.username = $1
                           ;`
    pool.query(findUserQuery, [username], (error, results) => {

        console.log('results:', results.rows)

        if (error) {

            res.status(500)

        }
        else {

            if (results.rows.length) {


                res.status(400).send({

                    message: "Failed! Username is already in use!"
                });
            }
            else {


                next();
            }

        }

    })



}