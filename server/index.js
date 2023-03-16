const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    key: "userID",
    secret: "Steamboat202301!NicholasPritchyk",
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 60*60*24,
    }
}))

const db = mysql.createConnection({
    user: "reciperepo",
    host: "localhost",
    password: "Steamboat202301!",
    database: "reciperepo"
});

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username=? AND password=?", [username, password],
        (err, results) => {
            if (err) {
                 res.send({err: err});
            }
            else if(results.length > 0) {
                res.send({ message: "Username already exists"});
            } else {
                res.send({ message: ""})
                db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password],
                    (err, results) => {
                    console.log(err);
            })
            }
        }
    )

})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.get("/favorites", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username=? AND password=?", [username, password],
        (err, results) => {
            if (err) {
                 res.send({err: err});
            }

            else if(results.length > 0) {
                req.session.user = results
                console.log(req.session.user)
                res.send(results);
            } 
            
            else {
                res.send({ message: 'User does not exist'});
            }
        }
    )
});

app.listen(3001, () => {
    console.log("Server running on PORT: 3001");
})
