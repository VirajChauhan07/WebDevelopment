const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight/(height*height)
    res.send("Your BMI is " + result);
});



// app.get("/", function(req, res){
//     res.send("Hello");
// });

// app.get("/contact", function(req, res){
//     res.send("contact at me xyz@gmail.com");
// });

// app.get("/hobbies", function(req, res){
//     res.send("<ul><li>code</li><li>gym</li><li>songs</li></ul>");
// });

// app.get("/about", function(req, res){
//     res.send("about me myself Chauhan viraj I am the company owner");
// });

app.listen(3000, function(){
    console.log("Server startes at port 3000");
});