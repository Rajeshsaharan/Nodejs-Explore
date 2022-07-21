//how to import an module
const app = require("./app")

console.log(app.a)
const color = require('colors') //importing a module from node_modules
// const chalk = require('chalk')
const http = require('http') // http module
// console.log(http)

// console.log(chalk.green('Hello %s'), "hello")
console.log('hello' .blue);


http.createServer((request,response)=>{ //request comes from browser 
    //response we send to data to client
    response.writeHead(200, {'content-type' : 'application\json'}); //write header

    // response.write('<h1>hello </h1>') // body write as json or stringify object
    //also can pass an object as object given below

    response.write(JSON.stringify({name: "rajesh", age : 23, course : "brt"}))
    response.end()
}).listen(5600)


//how to take argumenmt from node js console

// we can handle that by "process" global module

console.log(process.argv) //gives array of ["node insatlled location", "current directory"]

//if we pass any input from node js console it will add (push) this to proccess.argv array will become 2nd index item

//example if we pass nodejs index.js hello world
//console.log(process.argv) // output ---> ["node installed loaction", "current diretcory", "hello", "world"]


// how to creata a file using input

const fileSystem = require('fs')

const input = process.argv
// fileSystem('filename', "content")

// fileSystem.writeFileSync(input[2], input[3])

console.log(input[2], input[3])
//fileSystem.unlinkSync remove file


// path or fileSystem practice

const path= require('path') //path module
const dirPath = path.join(__dirname, 'files') // __dirname gives current directory
console.log(dirPath) 
// console.log(dirPath)

//create files in loop

for (let i=0 ; i < 5; i++){
    fileSystem.writeFileSync(`${dirPath}/myfile${i}.txt`, 'files from loops')
}