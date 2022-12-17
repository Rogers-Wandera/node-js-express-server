const authorize = (req,res,next) => {
    const { admin } = req.query;
    if(admin === "admin") {
        console.log("welcome admin")
        console.log("Authorized");
        next()
    } else {
        console.log("welcome user")
        console.log("not authorised");
        next()
    }
}

module.exports = authorize;