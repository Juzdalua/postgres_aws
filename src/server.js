import "dotenv/config";
// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import db from "./db";
import excel from "exceljs";
import fs from "fs";
import path from "path";

const todaysFolder = require("./component").todaysFolder;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static('public'));

const Model = db.users; 

//download excel file with users DB
app.get("/1", async (req, res) => {    
    //return res.sendFile(__dirname+"/index.html");       
    let data;

    try {        
        data = await Model.findAll();    
        console.log('success!')        
    } catch (error) {
        console.log(`!!! Error: ${error}`)
    }

    // console.log(data);
    // console.log(`data: ${JSON.stringify(data)}`)
    
    //excel sheet 만들기
    let timestamp = new Date().getTime();
    const filename = 'List_'+timestamp+'.xlsx';
    const workbook = new excel.Workbook();    

    //db->excel 변환
    const header = [
        {
            header: "ID",
            key: 'id'
        },
        {
            header: "이름",
            key: 'name'
        },
        {
            header: "나이",
            key: 'age'
        },
    ];

    let worksheet = workbook.addWorksheet('List', {dateFormats:['YYYY.MM.DD']});
    worksheet.columns = header;
    worksheet.addRows(data);
    await workbook.xlsx.writeFile("./public/exports/"+filename)
          
    return res.json(data);
});


//make folder
app.get("/2", (req,res) => {
    const uploadRoute = todaysFolder("health-infos").UploadDir;
    console.log(uploadRoute);
    
    const newPath = todaysFolder("health-infos").todaysFolder;
    console.log(newPath)
    

    return res.send("");
});


//make DB table
app.get("/3", async(req, res) => {

    // const amy = await Model.create({
    //     id:3,
    //     name: "amy",
    //     age: 20
    // });
    // console.log(amy)

    // const json = await Model.findOne({
    //     where:{id:1}
    // });
    // console.log(json)

});

app.listen(PORT, () => {
    console.log(`Connected PORT: ${PORT}`);
});