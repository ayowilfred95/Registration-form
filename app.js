const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");
const Reg = require("./models/model");
const hbs = require('hbs');
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','hbs');
hbs.registerPartials(path.join(__dirname,'/partials'));
 
app.get("/",(req,res)=>{
    res.status(200).render("index");
})

app.post("/", async(req,res)=>{
    try
    {
        if(req.body.password === req.body.confirmpassword)
        {
            const doc = new Reg(req.body);
            const resp = await doc.save();
            res.status(201).render("index");

            
        }
        else{
            res.status(404).send("Passwords are not matching");
        }
    }catch(err){
        res.status(500).send("err");
    }
})

















app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})
