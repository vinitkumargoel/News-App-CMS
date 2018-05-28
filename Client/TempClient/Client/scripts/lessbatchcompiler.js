'use strict';
const fs = require("fs");
const { spawn } = require("child_process");
const path = require("path");
const paths = require("../config/paths");

const rootPath = process.cwd();
var helpFlag = false;
var inputDir;
var outputDir;

process.argv.forEach((clo,i)=>{
    let option = clo.split('=');
    if(i>1){    
        switch(option[0]){
            case "--inputDir":
                inputDir = option[1];
                break;    
            case "--outputDir":
                outputDir = option[1];
                break;
            case "--help":
                helpFlag = true;
                console.log("Usage:\n"+
                            "Add the following command as a script(with name of your choice) in your npm scripts and run\n"+
                            "'node src/js/scripts/lessbatchcompiler.js --inputDir=<dirname> --outputDir=<dirname>'\n"+
                            "\t--help For usage\n"+
                            "\t--inputDir Enter input directory of less files\n"+
                            "\t--outputDir Enter output directory for css files");
                break;
            default:
                console.log("Invalid option. Try --help option for Usage.")

        }        
    }
});

if(!helpFlag){
    fs.watch(inputDir,{encoding:"utf8"},(eventType,filename)=>{
        let input = inputDir+filename;
        let output = outputDir+filename.split(".")[0]+".css";
        if(eventType === "change"){
            let lessc = spawn("node",[path.resolve(rootPath+"/node_modules/less/bin/lessc"),input,output,"lint"]);

            console.log("[lessc]: Compiling:= "+input+" into "+output);
            
            lessc.stdout.on('data', (data) => {
                console.log(data.toString());
            });

            lessc.stderr.on('data', (data) => {
                console.log(data.toString());
            });

            lessc.on('exit', (code) => {
                console.log(`Less Compiler exited with code ${code}`);
            });
        }
        if(eventType === "rename"){
            fs.unlink(output,(err)=>{
                (err)?console.log("error"):console.log("deleted");
            });          
            console.log(filename);
        }
    });
}