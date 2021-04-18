const http = require('http');
const fs = require('fs');


http.createServer((req , res)=>{

    if(req.url == '/' ) {
        res.write('Hello world ');
        res.end();
    }
    if(req.url == '/person')
    {

        fs.readFile('./person.json','utf8', (err , data)=>{
            if(err) throw err;
            console.log(JSON.parse( data));
            let dat = JSON.parse(data);
            res.write(JSON.stringify(dat).toString());
            res.end();
        })
       
    }

    else if(req.url == '/app.js'){ // get request with parameter == app.js?name=ankur&number=64132
        
        const queryObject = url.parse(req.url , true).query;

        let num1 = parseInt( queryObject.param1);
        let num2 = parseInt(queryObject.param2);
        let sum = num1 + num2;
        res.write(`your sum is : ${sum.toString()}`);
         }

}).listen(3000 , ()=>{
    console.log('server is running on port 3000.....');
})