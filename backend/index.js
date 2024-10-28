const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/projects").
    then(() => console.log("Database is connect"))
    .catch(() => console.log("Database is not connected"))

const User = mongoose.model("User", new mongoose.Schema(
    {
        username: String,
        password: String
    }, {collection:"projects"}
));

const secret_key = 'mugiwara_56'


app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedpassword = await bcryptjs.hash(password, 10)
    // save new user
    const user = User({ username, password: hashedpassword });
    await user.save()

    // send the token to frontend
    const token = jwt.sign({ username: user.username }, secret_key)
    res.json({ token })
    console.log(token)

})

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // find the user in the database
    if (!user) return res.status(400).send("User not found")

    // compare password
    const ispasswordvalid = await bcryptjs.compare(password, user.password);
    if (!ispasswordvalid) return res.status(400).send("password is invaild");

    // Generate jwt token 
    const token = jwt.sign({ username: user.username }, secret_key)

    // send the token to frontend
    res.json({ token });


})

const authenticatetoken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send("Access Denied")

    jwt.verify(token, secret_key, (err, user) => {
        if (err) return res.status(403).send("Invailed password")
        req.user = user;
        next();
    })
}

app.get("/producted", authenticatetoken, (req, res) => {
    res.send(`Hello ${req.user.username}`)
})

app.listen(5000, function () {
    console.log("server Started")
})