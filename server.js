const express = require('express')
const app = express()

app.use(express.static('public'))

function greet (){
    
    var greetings = ["Hei", "Hello", "Hola", "Hey"];
    var rgreet = greetings[Math.floor(Math.random()*greetings.length)];
    return rgreet;
}

app.get ('/rgreet/:id', function(req, res){
    res.send(greet() + " " + req.params.id);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})