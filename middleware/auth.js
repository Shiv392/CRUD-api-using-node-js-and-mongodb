const homeauthentication=(req,res,next)=>{
const age=req.params.age;
//defining new name property in middleware
req.name='shivsoni'
if(age>18){
    console.log('you are authorized');
    next();
}
else{
    res.send(`<h1>You are below 18, not authorized1**</h1>`);
}
}
const aboutauthentication=(req,res,next)=>{
const age=req.query.age;
console.log(age,typeof age)
if(Number(age)>18){
    console.log('you are authorized');
    next();
}
else{
    res.send(`<h1>You are below 18, not authorized`);
}
}
module.exports={homeauthentication,aboutauthentication}