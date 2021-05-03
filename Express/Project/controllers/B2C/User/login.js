const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');

router.post('/' , [express.json()],(req , res , next)=>{
    let username = req.body.username;
    let password = req.body.password;
    model.User.findOne({EmailId:username}).select().then(result =>{
       if(result.EmailId == username && result.Password == password){
            res.send('login succesfully!')

       } 
    }).catch(err=>{
        if(err) throw err;
        res.send("login faild!")
        next();
    })


});



module.exports = router;
