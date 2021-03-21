const fs = require('fs');
const readLine = require('readline');
const rl = readLine.Interface({input:process.stdin,output:process.stdout});

function getFileName(){
    return new Promise((resolve, reject)=>{
        rl.setPrompt('Enter the filename:');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() === ''){
                rl.setPrompt('The filename can not be empty. Try again:');
                rl.prompt();
            }
            else{
            resolve({fileName:userInput});
        }
        });

    });
}
function getFileContent(){
    return new Promise((resolve,reject)=>{
        rl.setPrompt('Enter the content you want in the text: \n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            
            resolve({content:userInput});
        });
    });
}

async function runProc(){
    filename = await getFileName();
    content = await getFileContent();
    rl.close();

    fs.writeFile(filename.fileName,content.content,(err)=>{
        if(err){
            console.log(err);
        }
        else {
            console.log('File created');
        }
    });


}

runProc();
