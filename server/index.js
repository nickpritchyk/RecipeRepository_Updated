const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "reciperepo",
    host: "localhost",
    password: "Steamboat202301!",
    database: "reciperepo"
});

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password],
        (err, results) => {
            console.log(err);
        })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username=? AND password=?", [username, password],
        (err, results) => {
            if (err) {
                 res.send({err: err});
            }

            if(results.length > 0) {
                res.send(results)
            } 
            
            else {
                res.send({ message: "No account found with that information" });
            }
        }
    )
});

app.listen(3001, () => {
    console.log("Server running on PORT: 3001");
})
