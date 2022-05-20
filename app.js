console.log("hiiiii");
const PORT = 4000 || process.env;
const express = require('express');
const res = require('express/lib/response');
const { json } = require('express/lib/response');
const http = require('http');
const app = express();
app.use(express.json())
const db = require('./db');
let data = []
// app.get('/hello',(req,res)=>{
//     res.status(200).send('hii I"m developer')
// })
// app.post('/bye',(req,res)=>{
//     res.status(200).send('hii I"m developer')
// })
app.post('/hell', (req, res) => {
    const A = req.body.name;
    const B = req.body.rollno;
    const allfilled = A !== " " && B !== " ";
    const allempty = A == " " && B == " ";
    const noname = A == "" && B !== " ";
    const noroll = A != " " && B == " ";
    // console.log(req.body);
    // const jsondata =[{name:"himanshu",rollno:22,},{},{}];
    // res.status(200).json(req.body);
    if (allfilled) { res.status(200).send('SUCCESSFULL'); 
        data.push(req.body)
        console.log(data);}
    if (allempty) { res.status(400).send('UNSUCCESSFUL'); }
    if (noname) { res.status(400).send('please enter name'); }
    if (noroll) { res.status(400).send('please enter rollno'); }

})
app.get('/new', (req, res) => {
    obj = { "status": 200, "msg": "success" }
    res.status(200).json(data)
})
app.listen(PORT, (res, req) => {
    console.log('hii I"m listening on ' + PORT);
})
// http.createServer((req,res)=>{
// res.write('Hi');
// res.end()
//  }).listen(PORT)