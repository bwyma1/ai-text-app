const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

const cors = require('cors')
app.use(cors())

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'coolgecko123',
    database: 'DBUI'
})

connection.connect()

app.get('/', (req,res) => {
    res.send('hello world')
})

app.put('/parse',(req,res) => {
    console.log(req.body)

    try {
        const body = req.body
        const name = body['first'] + " " + body["last"]
        const age = body["age"]
        const isAdmin = body["admin"] ? "is an admin" : "is not an admin"
        const message = `${name} is ${age} years old and ${isAdmin}`
        res.status(200)
        res.send(message)
    } catch (err) {
        console.log(err)
    }
})

app.get('/db', (req, res) => {
    connection.query('SHOW TABLES', (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        res.status(200)
        res.send(rows)
    })
})

app.post('/user', (req, res) => {
    const {email, user_name, password, security_question, security_question_answer} = req.body
    const query = `INSERT INTO user (email, user_name, password, security_question, security_question_answer) VALUES ('${email}', '${user_name}', '${password}', '${security_question}', '${security_question_answer}')`
    
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
  
      const selectQuery = `SELECT * FROM user WHERE email = '${email}'`;
  
      connection.query(selectQuery, (err, rows, fields) => {
        if (err) throw err;
  
        const createdUser = rows[0];
  
        res.status(200).json(createdUser);
      });
    })
  })

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM user;', (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

// get user with '/user?email='someEmail'
app.get('/user', (req, res) => {
    const email = req.query.email
    const user_id = req.query.user_id
    if(email){
        const query = `SELECT * FROM user WHERE email='${email}';`
        connection.query(query, (err, rows, fields) => {
            if (err) throw err

            res.status(200)
            res.send(rows)
        })
    }
    else{
        const query = `SELECT * FROM user WHERE user_id='${user_id}';`
        connection.query(query, (err, rows, fields) => {
            if (err) throw err

            res.status(200)
            res.send(rows)
        })
    }
})

// login user with '/user?email='someEmail'&password='somePassword'
app.get('/login', async (req, res) => {
    const email = req.query.email
    const password = req.query.password
    const query = `SELECT * FROM user WHERE email='${email}' AND password='${password}';`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

// update password at '/user?email='someEmail'' with parameter password
app.put('/user', (req, res) => {
    const email = req.query.email
    const password = req.body.password
    const bio = req.body.bio
    const prof_pic_choice = req.body.prof_pic_choice
    const location = req.body.location
    const phone = req.body.phone
    
    if(password) {
        const query = `UPDATE user SET password='${password}' WHERE email='${email}'`
        connection.query(query, (err, rows, fields) => {
            if (err) throw err
    
            console.log(rows)
            res.status(200)
            res.send(true)
        })
    } else {
        const query = `UPDATE user SET bio='${bio}', prof_pic_choice='${prof_pic_choice}', location='${location}', phone='${phone}'  WHERE email='${email}'`
        connection.query(query, (err, rows, fields) => {
            if (err) throw err
    
            console.log(rows)
            res.status(200)
            res.send(true)
        })
    }

})




