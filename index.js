const express=require("exrpess");
const path=require("path");


const app=express();
const port=8000;
app.set('view engine','ejs');
app.set("views".path.resolve("./views"));



app.listen(port,()=>console.log(`server started on port : ${port}`));