// OS Module

const os = require('os');

const user = {
    name:os.type(),
    release: os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(user);
console.log(`${os.uptime}`);

// FS Module

const { readFileSync, writeFileSync } = require('fs');

const readit = readFileSync('./content/firest.txt','utf8');
console.log(readit);

const writenew = writeFileSync('content/new-writefile.txt', `I am created by ${readit}`);
console.log(writenew);

const {readFile} = require('fs');

readFile('./content/firest.txt','utf8',(err,res) => {
    if(err){
        console.log(err);
    }
})

