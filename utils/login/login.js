const Login = (req,res) => {
    console.log(req.body)
    const { name } = req.body;

    if(name) {
        res.status(200).send(`Welcome ${name}`)
    }


    res.status(404).send("Please provide your name")
}

module.exports = Login;