const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/EJSProjectDB")
.then(result =>{
    console.log('connected to MongoDB...');
}).catch(err =>{
    console.log('Unable to connect MongoDB....');
});

const studentSchema = new mongoose.Schema({
    StudentId : Number,
    Name : String,
    Surname : String,
    Address : String ,
    Email : String
});

const Student = new mongoose.model('Student' , studentSchema);

module.exports = {Student}