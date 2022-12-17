const express = require("express");
const loginRouter = require("./router/login");
const peopleRouter = require("./router/people");

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(express.static("./methods-public"))
app.use("/login", loginRouter)
app.use("/api/people", peopleRouter)

app.listen(5000, () => {
    console.log("App running on port 5000")
})