const express=require("express");
const path=require("path");
const sjs=require('ejs');

const app=express();
const port=8000;
app.set('view engine','ejs');
app.set("views",path.resolve("./veiws"));

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.listen(port,()=>console.log(`server started on port : ${port}`));