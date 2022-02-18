const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {


    /*user_model.getUsers()
    .then(response =>{
        res.status(200).send(response.json())
    })
    .catch(e =>{
        res.status(500).send(e);
    })
*/

    res.status(200).send({ username: 'admin', password: 'password1' });

})








app.listen(port, () => {

    console.log(`App running on port ${port}.`)

})