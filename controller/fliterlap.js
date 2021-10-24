
const express = require("express");
const app = express();
const connection = require("../model/db_connect");
app.use(express.json());

const filterbn=app.get("/getlap/brand/:brandname",(req,res)=>{
    let bname=req.params.brandname;
    let sql=`select * from laptop where brandname="${bname}"`;
    connection.query(sql,(err,data)=>{
        if(err)
        throw err;
        res.send(data);
    })
})

const filterram=app.get("/getlap/ram/:ram",(req,res)=>{
    let ram=req.params.ram;
    let sql=`select * from laptop where brandname="${ram}"`;
    connection.query(sql,(err,data)=>{
        if(err)
        throw err;
        res.send(data);
    })
})
const filterom=app.get("/getlap/rom/:rom",(req,res)=>{
    let rom=req.params.rom;
    let sql=`select * from laptop where brandname="${rom}"`;
    connection.query(sql,(err,data)=>{
        if(err)
        throw err;
        res.send(data);
    })
})
const filterprice=app.get("/getlap/price/:price",(req,res)=>{
    let price=req.params.price;
    let sql=`select * from laptop where brandname="${price}"`;
    connection.query(sql,(err,data)=>{
        if(err)
        throw err;
        res.send(data);
    })
})
const filtercusrat=app.get("/getlap/rating/:cusrat",(req,res)=>{
    let cusrat=req.params.cusrat;
    let sql=`select * from laptop where brandname="${cusrat}"`;
    connection.query(sql,(err,data)=>{
        if(err)
        throw err;
        res.send(data);
    })
})

module.exports=filterbn,filtercusrat,filterom,filterram,filterprice;