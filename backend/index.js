const pool = require('./db-pool');
const express = require('express')
const cors = require('cors')
const app = express()
const verifyUsername = require('./middleware/verifyUsername');
const verifyToken = require('./middleware/verifyToken');

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



app.post('/signUp', [verifyUsername], (req, res) => {

  const { username, password, email } = req.body;

  const addUserQuery = `INSERT INTO users
                          (
                            username,
                            password,
                            email,
                            created_on,
                            last_login,
                            user_pic_url
                          )
                        VALUES($1,$2,$3,$4,$5,$6)
                        RETURNING username,user_id,user_pic_url, created_on,last_login,email
                      ;`

  /*pool method takes inc params and execute thier resp methods */


  pool.query(addUserQuery, [
    username,
    password,
    email,
    (new Date()).toISOString(),
    (new Date()).toISOString(),
    'https://picsum.photos/1920/1080'
  ], (error, results) => {

    console.log('results:', results)


    if (error) {

      res.status(500)

    }
    else {

      res.status(200).json(results.rows[0])

    }
  })
})
app.post('/login', [verifyToken], (req, res) => {

  const { username } = req.body;
  const loginQuery = `SELECT * 
                      FROM users 
                      WHERE username = '${username}'
                      ;`

  /*pool method takes inc params and execute thier resp methods */


  pool.query(loginQuery, (error, results) => {

    console.log('results:', results.rows)

    const [user] = results.rows;
    delete user.password;

    if (error) {

      res.status(500)

    }
    else {

      res.status(200).json(user)

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


app.get('/findUser/:user_id', (req, res) => {

  console.log('params:', req.params)

  const user_id = req.params.user_id;

  console.log('findUser/ UserId:', user_id)

  const userInfoQuery = `SELECT 
                            user_pic_url,username
                          FROM
                            users
                          WHERE 
                            user_id = $1;`

  pool.query(userInfoQuery, [user_id], (error, results) => {
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



app.post('/addcomments', (req, res) => {



  const { commentValue, user_id, pic_id } = req.body;

  console.log('userid', user_id)
  addCommentQuery = `
                    INSERT INTO
                      comment(text,user_id,pic_id)
                    VALUES($1,$3,$2);
                   `

  pool.query(addCommentQuery, [commentValue, pic_id, user_id], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {

      res.status(200).json(results.rows)
    }

  })

})

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
app.get('/browse/:pet_id', (req, res) => {

  const { pet_id } = req.params;
  // console.log('PetId:', pet_id)

  // better  QUERY NEEDED HERE
  const getPetPicsQuery = `SELECT 
                            *
                          FROM 
                            pictures
                          WHERE
                            pictures.pet_id = $1;

                          `




  pool.query(getPetPicsQuery, [pet_id], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {

      res.status(200).json(results.rows)
    }

  })

})

app.get('/browse/:pic_id/comments', (req, res) => {

  const { pic_id } = req.params;


  // better  QUERY NEEDED HERE

  const getCommentQuery = `SELECT * 
                           FROM 
                            comment
                           
                            WHERE comment.pic_id = $1
                          ; `

  pool.query(getCommentQuery, [pic_id], (error, results) => {

    if (error) {

      res.status(500)

    }
    else {

      res.status(200).json(results.rows)
    }

  })

})



app.delete('/:username/comments', (req, res) => {

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
app.patch('/:username/pets', (req, res) => {

  const { username } = req.params;
  const { petId, picId: { url } } = req.body;

  updatePetQuery = `UPDATE pets 
                    SET link = $2
                    WHERE pet_id = $1 ;`



  pool.query(updatePetQuery, [petId, url], (error, results) => {

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


app.post('/:username/pictures', (req, res) => {

  const { username } = req.params;
  // console.log('req body:', req.body)
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

app.get('/Browse/:pet_id', (req, res) => {

  const pet_id = req.params.pet_id;


  const getPetPicsQuery = `SELECT 
                            *
                          FROM
                            pictures
                          WHERE 
                            pet_id = $1
                        ;`

  pool.query(getPetPicsQuery, [pet_id], (error, results) => {
    if (error) {

      res.status(500)
      throw error
    }
    else {

      res.status(200).json(results.rows)
    }
  })

})





















app.listen(port, () => {

  console.log(`App running on port ${port}.`)

})