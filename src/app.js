const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const path = require("path");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

app.get('/',(req,res)=>{
    res.render('index',{title:"Messages",messages:messages});
})

app.get('/new',(req,res)=>{
    res.render('form',{title:"New message"});
})

app.post('/new',(req,res)=>{
   const {messageUser,message}=req.body;
   messages.push({text:message,user:messageUser,added:new Date()});
   res.redirect('/');
})

module.exports=app;
