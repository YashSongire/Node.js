const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile('./content/firest.txt','utf8', (err,data) => 
        {
            if(err){
                reject(err);
            }
            else 
            resolve(data);
        })
    }) 
}

getText('./content/firest.txt')
.then(result => console.log(result))
.catch(error => console.log(error))