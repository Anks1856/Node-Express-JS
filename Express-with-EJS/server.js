const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const model = require('./MongoDB/model');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get('/' , (req , res )=>{
    model.Student.find({}).exec().then(students =>{
        console.log('mila mal');
        console.log(students);
        res.render('index' , {students : students});
    }).catch(err =>{
        console.log(err);
        res.send('unable to find data!');
    })
    
});

app.post('/addStudent' ,(req , res)=>{
    console.log(req.body);
    const student = new model.Student(req.body);
    student.save().then(result =>{
        console.log(result);
        res.send('Your data is successfully saved!');
    }).catch(err =>{
        console.log(err);
        res.send('unable to save data please try again!');
    });
} )

app.listen(5000 , ()=>{
    console.log('server is running on port 5000....');
})