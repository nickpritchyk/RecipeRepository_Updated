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
    secret: "*",
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 60*60*1000}
}))

const db = mysql.createConnection({
    user: "reciperepo",
    host: "localhost",
    password: "*",
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

app.post('/', (req, res) => {
    const favorite = req.body.favorite;
    console.log("Fav: ", favorite)
    const username = req.body.username;
    // console.log("user: ", username)

    let userid;

    db.query("SELECT userid FROM users WHERE username=?", [username],
    (err, results) => {
        if (err){
            // res.send({err: err})
        } else if(results.length > 0){
                userid = results[0].userid;
                    db.query("SELECT * FROM favorites WHERE favoriteID=? AND userid=?", [favorite, userid],
                        (err, results) => {
                    if (err) {
                        res.send({err: err});
                        console.log("err");
                    }
                    else if(results.length > 0) {
                        console.log("Already in favorites");
                        res.send({ message: "Already in favorites"});
                    } else if(favorite != 0) {
                        res.send({ message: ""})
                        console.log("Inserting");
                        db.query("INSERT INTO favorites (favoriteID, userid) VALUES (?, ?)", [favorite, userid],
                            (err, results) => {
                            console.log(err);
                    })
                    }
                }
            )
        } else {
            res.send({message: "Not logged in"})
        }
    })

    // console.log(userid);
})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.get("/logout", (req, res) => {
    if(req.session.user){
        req.session.destroy();
        // req.session.cookie.expires = new Date();
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

app.post('/favorites', (req, res) => {
    console.log(req.session)
    const username = req.body.username;

    db.query("SELECT favorites.favoriteID FROM favorites INNER JOIN users ON users.userid=favorites.userid AND users.username=?", [username],
    (err, results) => {
        if(err) {
            res.send({err: err})
        } else if(results.length > 0) {
            res.send(results)
        } else {
            res.send({message: "No favorites found"})
        }
    })
})

app.listen(3001, () => {
    console.log("Server running on PORT: 3001");
})
