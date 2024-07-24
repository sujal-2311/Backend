const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get('/', function(req,res) {
    res.send("Hello world")
})

app.get('/about',function(req,res) {
    res.send("About page")
})

app.get('/profile',function(req,res) {
    return next(new Error("something went wrong"));
})

app.use((err,req,res,next) => {
    console.log(err.stack)                                                                                                                                                                               
    res.status(500).send("Something broke!");
})

app.listen(3000);