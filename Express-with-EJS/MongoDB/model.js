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

const ImgSchema = new mongoose.Schema({
    name : String ,
    desc : String ,
    img : {
        data : Buffer ,
        contentType : String
    }
})

const Student = new mongoose.model('Student' , studentSchema);
const Image = new mongoose.model("Images" ,ImgSchema);

module.exports = {Student , Image}