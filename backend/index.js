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


app.post('/login', (req, res) => {

  const { username } = req.body;
  const loginQuery = `SELECT username FROM users WHERE username = '${username}';`

  /*pool method takes inc params and execute thier resp methods */


  pool.query(loginQuery, (error, results) => {
    if (error) {

      res.status(500)

    }
    else {
      res.json({ message: results })
    }
  })
})

app.get('/:username', (req, res) => {

  const username = req.params.username;

  const userPicQuery = `SELECT 
                            url,pic_id,pet_id
                          FROM
                            users
                          INNER JOIN
                            pictures
                          ON
                            users.user_id = pictures.user_id
                          WHERE 
                            username = $1::text;`

  pool.query(userPicQuery, [username], (error, results) => {
    if (error) {

      res.status(500)
      throw error
    }
    else {

      res.status(200).json(results.rows)
    }
  })

})




app.get('/:username/comments', (req, res) => {

  const username = req.params.username;


  const commentQuery = `SELECT *
                          FROM comment
                          WHERE user_id = (
                            SELECT user_id FROM 
                        users WHERE username = $1
                          )
                        `;


  // const commentQuery = `SELECT 
  //                           *                             
  //                         FROM 
  //                           comment
  //                         JOIN
  //                           users 
  //                         ON 
  //                           users.user_id  = comment.user_id  
  //                         WHERE  username = $1`;

  pool.query(commentQuery, [username], (error, results) => {

    if (error) {

      res.status(500)
      throw error
    }
    else {
      // console.log(results.rows)

      res.status(200).json(results.rows)
    }
  })



  /* pool method makes request for pictures from db */

})

addCommentQuery = `INSERT INTO 
                      comment(text,
                        user_id,
                          pic_id
                        )
                    VALUES($1,(
                      
                        SELECT 
                          user_id
                        FROM
                          users
                        WHERE 
                          username = $2::text
                      
                    ),$3)`;


app.post('/:username/comments', (req, res) => {

  const { username } = req.params;


  const { commentValue, picId } = req.body;


  pool.query(addCommentQuery, [commentValue, username, picId], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {
      res.json({
        message: results
      })
    }

  })

})


app.delete('/:username/comments/', (req, res) => {

  // const { commentId } = req.params;

  // console.log('the comment ID', commentId)

  const { commentId } = req.body;

  deleteCommentQuery = `DELETE FROM comment
                        WHERE comment_id = $1;
                        `

  pool.query(deleteCommentQuery, [commentId], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {
      res.json({
        message: results
      })
    }
  })

})
app.post('/:username/pets', (req, res) => {

  const { username } = req.params;
  const { petName, petBreed, petAge } = req.body;

  addPetQuery = `INSERT INTO 
                  pets(petname,breed,link,age,user_id)

                VALUES
                  (
                    $2,$3,'empty',$4,
                    (

                      SELECT 
                        user_id
                      FROM
                        users
                      WHERE 
                        username = $1::text

                    )
                
                )
                RETURNING pet_id;`

  pool.query(addPetQuery, [username, petName, petBreed, petAge], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {

      res.json({

        message: results
      })
      console.log('message:', results)
    }

  })


})

app.get('/:username/pets', (req, res) => {

  const { username } = req.params;


  getPetQuery = `SELECT *
                  FROM pets
                  WHERE user_id = (
                    SELECT user_id FROM 
                users WHERE username = $1)
                ;`

  pool.query(getPetQuery, [username], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {

      res.status(200).json(results.rows)


    }

  })


})








app.post('/:username/pictures', (req, res) => {

  const { username } = req.params;
  console.log('req body:', req.body)
  const { picId: { url }, petId } = req.body;

  addPictureQuery = `INSERT INTO
                      pictures(pet_id,url,user_id)
                        
                     VALUES($3,$2,
                        (SELECT 
                          user_id
                        FROM
                          users
                        WHERE 
                          username = $1::text
                        )
                      )
                    
                    `;
  pool.query(addPictureQuery, [username, url, petId], (error, results) => {
    if (error) {
      res.status(500)
    }
    else {
      res.status(200).json(results.rows)
    }
  })


})


app.delete('/:username/pictures/:picId', (req, res) => {


  const { username, picId } = req.params;

  delPictureQuery = ` DELETE FROM 
                        pictures
                      WHERE
                        pic_id = $2 AND user_id = (
                          SELECT 
                          user_id
                        FROM
                          users
                        WHERE 
                          username = $1::text
                        )
                      ;`

  pool.query(delPictureQuery, [username, picId], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {

      res.json({

        message: results
      })
    }

  })


})




















app.listen(port, () => {

  console.log(`App running on port ${port}.`)

})