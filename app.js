
const express = require("express");
const bodyParser = require("body-parser");
const help=require('./function');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);
  var op=req.body.operation;
  var result;
  if(op=='+'){
    result=help.add(num1,num2);
  }
  else if('-'){
    result=help.substract(num1,num2);
  }
  else if('*'){
    result=help.multiply(num1,num2);
  }
  else{
    result=help.division(num1,num2);
  }
 
  
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
  console.log("Visit localhost:3000 in your web browser");
});
