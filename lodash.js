const _ = require('lodash');

const arrays = [1,[2,[3,['Thala']]]];

console.log( _.flattenDeep(arrays));

console.log('Start');

setTimeout(() => {
 console.log('inside Set');   
},0)

console.log('Stop');