const express = require("express");
const app = express();
const connection = require("./model/db_connect");
app.use(express.json());
const addlap=require("./controller/addlap");
app.use(addlap);
const getlap=require("./controller/getlap");
app.use(getlap);

const filterbn = require("./controller/fliterlap");
app.use(filterbn);
const filterprice = require("./controller/fliterlap");
app.use(filterprice);
const filterram = require("./controller/fliterlap");
app.use(filterram);
const filtercusrat = require("./controller/fliterlap");
app.use(filtercusrat);
const filterom = require("./controller/fliterlap");
app.use(filterom);
const wishlist = require("./controller/wishlist");
app.use(wishlist);


app.listen(8080);

