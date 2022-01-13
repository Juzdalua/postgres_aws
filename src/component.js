import fs from "fs";
import path from "path";

const todaysFolder = (dir) => {
    const date = new Date();
    
    //make today`s folder
    if(!fs.existsSync("public"))
        fs.mkdirSync("public");

    if(!fs.existsSync(`public/${dir}`))
        fs.mkdirSync(`public/${dir}`);
        
    if(!fs.existsSync(`public/${dir}/${date.getUTCFullYear()}`))
        fs.mkdirSync(`public/${dir}/${date.getUTCFullYear()}`)
    
    if(!fs.existsSync(`public/${dir}/${date.getUTCFullYear()}/${date.getUTCMonth()+1}`))
        fs.mkdirSync(`public/${dir}/${date.getUTCFullYear()}/${date.getUTCMonth()+1}`)
            
    if(!fs.existsSync(`public/${dir}/${date.getUTCFullYear()}/${date.getUTCMonth()+1}/${date.getUTCDate()}`))
        fs.mkdirSync(`public/${dir}/${date.getUTCFullYear()}/${date.getUTCMonth()+1}/${date.getUTCDate()}`)

    const todaysFolder = `/${date.getUTCFullYear()}/${date.getUTCMonth()+1}/${date.getUTCDate()}`;
    
    console.log(__dirname)
    const UploadDir = path.join(
        __dirname,
        `../public/${dir}`,
        todaysFolder
    );
    return {
        UploadDir,
        todaysFolder
    };
};

module.exports = {
    todaysFolder
};