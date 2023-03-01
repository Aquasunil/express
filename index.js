import express from "express";

const app = express();
const PORT = 9000;

app.use('/',(req,res)=>{
  res.json({message:"Hello from Express App"});
})

app.listen(PORT,()=>{console.log(`listening server on ${PORT}`)})