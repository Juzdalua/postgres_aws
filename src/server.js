// const express = require("express");
import express from "express";
import bodyParser from "body-parser";

//postgresql
const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '78xhdtls@',
    port: 5432,
});
client.connect( error => {
    if(error)
        console.log(error);
    else
        console.log("seccess.");
});

/*
client.query('SELECT *FROM users', (error, res)=> {
    console.log(`error: ${error}`);
    console.log(`response: ${JSON.stringify(res)}`);
    console.log(res.rows);
    console.log(res.rows[0].name);
    console.log(res.rows[0].age);
    console.log(res.rows.length);
    client.end();
});
*/

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    
    return res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res) => {
    const {name, age} = req.body;    
    return res.send(`${name}님은 ${age}세입니다.`);
})

app.listen(PORT, () => {
    console.log(`Connected PORT: ${PORT}`);
});