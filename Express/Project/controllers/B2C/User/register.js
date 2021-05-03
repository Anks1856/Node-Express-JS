const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');


router.get('/', (req , res , next)=>{
    res.send('chala');
    next();
})

class User {

    static async addUser(req , res , next) {
        const user = new model.User(req.body);
        user.save().then(result =>{
            res.send("your are successfully register");
            next();
        }).catch(err =>{
            if(err) throw err;
            re.send("unable to register please try again!")
        });
    }

    


}

router.post('/add' ,[express.json()] ,User.addUser);
// router.delete('/:id/delete' , [express.json()] , Airport.deleteAirport);
module.exports = router;



