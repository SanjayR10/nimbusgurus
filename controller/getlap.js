
const express = require("express");
const app = express();
const connection = require("../model/db_connect");
app.use(express.json());

const getlap=app.get("/getlap",(req,res)=>{
    let sql=`select * from laptop`;
    connection.query(sql,(err,data)=>{
        if(err)
        throw err;
        res.send(data);
    })
})

module.exports=getlap;