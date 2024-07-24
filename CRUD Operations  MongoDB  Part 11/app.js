const express = require('express')
const app = express();
const userModel = require('./usermodel')

app.get('/',(req,res) => {
    res.send("Hello");
})

app.get('/create', async (req,res) => {
    let createduser = await userModel.create({
        name: 'harsh',
        email: 'harsh@gmail.com',
        username: 'harsh'
    })
    res.send(createduser)
})

app.get('/read', async (req,res) => {
    let users = await userModel.find();
    res.send(users)
})

app.get('/update', async (req,res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "sujal123"}, {name: "sujal mirani"}, {new: true})
    res.send(updateduser)
})

app.get('/delete', async (req,res) => {
    let users = await userModel.findOneAndDelete({username: "harsh"});
    res.send(users)
})

app.listen(3000)