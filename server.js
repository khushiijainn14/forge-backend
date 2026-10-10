const express=require('express'); //require the express 
const app=express(); //app is the instance of server //created server 

app.get('/',(req,res)=>{
    res.send("Hey kkhushi");

})

app.listen(3000,()=>{ //this will start the server 

})