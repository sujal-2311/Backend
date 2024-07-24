const fs = require("fs");
const http = require('http')

// writefile
fs.writeFile("hey.txt", "hello world", function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("Done")
    }
})

// append
fs.appendFile("hey.txt", " i am sujal", function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("Done")
    }
})

// copyfile
fs.copyFile("hello.txt","./copy/copy.txt", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Done")
    }
})

// rename
fs.rename("hey.txt","hello.txt", function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("Done")
    }
})

// unlink
fs.unlink("hello.txt", function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("removed")
    }
})

// remove directory
fs.rm("./copy",{recursive: true}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("removed");
  }
});

//http
const server = http.createServer(function(req,res) {
    res.end("hello world")
})

server.listen(3000)