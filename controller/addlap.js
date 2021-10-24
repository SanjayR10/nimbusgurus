
const express = require("express");
const app = express();
const connection = require("../model/db_connect");
app.use(express.json());

const addlap=app.put("/addlap",(req,res)=>{
    let sql=`insert into laptop (brandname,ram,rom,price,processor,os,colour,customerrating) values ("${req.body.brandname}","${req.body.ram}","${req.body.rom}","${req.body.price}","${req.body.processor}","${req.body.os}","${req.body.colour}","${req.body.customerrating}")`;
    connection.query(sql,(err)=>{
        if(err)
        throw err;
        res.send("laptop added successfully");
    })
})

module.exports=addlap;