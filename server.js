var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package
const exp=require("./Express");
var app1=exp();
var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault1=function(req, res){
    res.send("<h1>Transflower Learning Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Mentoring for skill building</li>"+
                    " <li>Workshops</li>"+
                    " <li>Online Course</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
app1.get("/express",onDefault)
app.get("/",onDefault1);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered

var server=app.listen(8081);
console.log("Server is running on port 8081");
