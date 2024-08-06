const cookieParser = require("cookie-parser")
const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express();

app.use(cookieParser())

app.get("/",function(req,res) {
        // bcrypt.compare("abcxyz", "$2b$10$JGdOnk4ib2MU7HkiIW2udO.v8WoA5v7P3pH69lXL0h3Vzft7Iucki", function(err, result){
        //     console.log(result)
        // })

        let token = jwt.sign({email: "sujal@example.com"}, "secret");
        res.cookie("token", token)
        console.log(token)
        res.send("done")

})

app.get("/read",function(req,res) {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
    res.send("read page")
})

app.listen(3000)