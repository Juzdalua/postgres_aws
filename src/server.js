import express from "express";
// const express = require("express");
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    return res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res) => {
    const {text} = req.body;
    return res.send(`${text}가 입력되었습니다.`);
})

app.listen(PORT, () => {
    console.log(`Connected PORT: ${PORT}`);
});