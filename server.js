const express=require("express");
const app=express();
const path=require("path");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'./public')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public","index"));
})
const PORT= process.env.PORT||8080;
app.listen(PORT);