const EventEmmiter = require('events');

const customEmmiter = new EventEmmiter();

customEmmiter.on('response', ()=> {
    console.log('DATA RECEIVED');
})
customEmmiter.on('response', ()=> {
    console.log('DATA RECEIVED Again');
})
    customEmmiter.emit('response');

    customEmmiter.on('response', ()=> {
        console.log('DATA RECEIVED Again');
    })