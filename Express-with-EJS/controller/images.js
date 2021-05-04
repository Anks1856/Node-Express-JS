const express = require('express');
const router = express.Router();
const app = express();
const model = require('../MongoDB/model');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('/../views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });



router.get('/show' , (req , res)=> {
    console.log('its working!');
    res.render('image');
});

router.post('/addImg' ,upload.single('img'), (req , res , next) => {
    console.log(req.body);

    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
            contentType: 'image/jpg'
        }
    }

    const images = new model.Image(obj);
    images.save().then(items =>{
        res.send('images saved');
        // res.render('image.ejs' , {items : items});
        next();
    })
})


module.exports = router;