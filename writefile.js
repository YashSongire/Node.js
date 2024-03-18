const {writeFileSync} = require('fs');

for(let i=0;i< 100000 ; i++){
    writeFileSync('./content/bigdata.txt',`I am ${i} \n`,{flag :'a'})
}