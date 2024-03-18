// const {CreateReadStream} = require('fs')

// const stream = CreateReadStream('./content/stream.txt')

// stream.on('data',(result) => {
//     console.log(result);
// })

const  http = require('http')
const fs = require('fs')

http.createServer(function (req,res) {
    const text = fs.readFileSync('.content/bigdata.txt','utf-8');
    res.end(text);
})
.listen(5000)