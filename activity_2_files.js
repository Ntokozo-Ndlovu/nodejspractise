//This app can create, view and delete textfiles;
const fs = require('fs');
const readline = require('readline');
const rl = readline.Interface({input:process.stdin,output:process.stdout});

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

async function runProc(option){
    if(option == 'R'){
        filename = await getFileName();
        rl.close();
        fs.readFile(filename.fileName,'utf8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('The file content:');
                console.log(file);
            }
        });
    }
    else if(option == 'D'){
        filename = await getFileName();
        rl.close();
        fs.unlink(filename.fileName,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('The file was deleted successfully');
            }
        });
    }
    else if(option == 'C'){
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
}

function getUserOptions(){
    console.log('Welcome to the textfile reader');
    rl.setPrompt('Choose one of the follwing\n R-reading, D-delete , C-creating a textfile:\n');
    rl.prompt();
    rl.on('line',(uin)=>{
        if(uin.trim() !== 'R' || uin.trim() !== 'D' || uin.trim() !== 'C'){
            runProc(uin);    
        }
        else {
            rl.setPrompt('Please choose from the letter given above:\n');
            rl.prompt();
        }
    });
    
}
getUserOptions();
