//***** Question 1 *****
// console.log('Hello World');
// console.error(new Error('Something went wrong'));


//***** Question 2 *****

// const os = require('os');
//
// console.log(os.arch());
// for(const cpu in os.cpus()) {
//     console.log(cpu);
// }
// console.log(os.uptime());


//***** Question 3 *****

// const fs = require('fs');
//
// fs.readFile('text.txt',(err,data)=>{
//
//     //err = null this false
//     //err = undefined this false
//     //err = 0 this false
//     //err = '' this false
//     //err = false this false
//     if(err){
//        console.error(err);
//        return;
//    }
//
//    console.log(data.toString());
// });


//***** Question 4 *****

// const fs = require('fs');
//
// const readStream = fs.createReadStream('text.txt');
// const writeStream = fs.createWriteStream('text-copy.txt');
//
// readStream.addListener('end',()=> {
//     console.log('End of file read');
// });
//
// readStream.pipe(writeStream);


//***** Question 5 *****

const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000,err => {
    if(err){
        console.error(err);
        return;
    }

    console.log('Server is listening on port 3000')
});

