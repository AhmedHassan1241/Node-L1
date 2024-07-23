// console.log("start");
// setTimeout(()=>{
//     console.log("out");
// },0)

// let studentName ="eman";
// console.log(studentName);

const fileSystem = require('fs');

fileSystem.appendFile('message.txt', 'Hello Hassan',(error)=>{
if(error) throw error;
    console.log('Data Appended Successfully'); 
});

const operatingSystem = require('os');


var userName = operatingSystem.userInfo().username;

console.log('User Name : ' + userName);