const express = require("express");
const app = express();
const connection = require("../model/db_connect");
app.use(express.json());

let data=[{
    "brandname":"acer",
    "ram":16,
    "rom":512,
    "price":60000,
    "processor":"19 10 gen",
    "os":"windows 11",
    "colour":"black",
    "customerrating":5
},]

let wishlist=app.get('/wishlist',(req,res)=>{
    res.send(data);
})

module.exports=wishlist