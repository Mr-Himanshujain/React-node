const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mrhimanshu:IsRCDb7pgCr4kjWm@cluster0.eq7bw.mongodb.net/?retryWrites=true&w=majority").then((res) => {
    console.log('db connected');
}).catch((e) => {
    console.error('error in db', e.message);
})