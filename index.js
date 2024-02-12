const express=require('express');
const port=8000;
const app=express();
const bodyparser=require('body-parser');
const auth=require('./middleware/auth.js');
const header=require('./headerrs/request-header.js');
const mongooese=require('mongoose');
const user=require('./routes/user.js');

app.use(bodyparser.json())


app.use('/user',user)

app.get('/home/:age',auth.homeauthentication,(req,res)=>{
    console.log(req.params.age);
    console.log('name in middleware',req.name)
    res.send(`<h1>This is Home Page</h1>`)
})

app.get('/about',(req,res)=>{


    console.log(req.query.age);
    res.send(`<h1>this is About Page</h1>`)
})

app.get('/header',(req,res)=>{
    res.setHeader('X-Name','shivsoni')
    res.json({
        RequestHeader:req.headers
    })
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})