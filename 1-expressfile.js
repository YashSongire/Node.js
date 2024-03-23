const express = require('express');
const path = require('path');
const {products} = require('./dummy.js')

const app = express();

app.listen(5000);

app.get('/', (req,res)=> {
    res.status(200).sendFile(path.resolve(__dirname,'./index.html'));
})

app.get('/json',(req,res) => {
    res.json(datajson)
})

app.get('/dummy',(req,res) => {
    res.json([{id:12,name: 'Yash'},{id:14,name: 'Jay'}])
})

app.get('/api/v1/query',(req,res) => {
    const {search,limit} = req.query;
    let sortedproducts = [...products];

    if(search){
        sortedproducts = products.filter((product) => {
            return product.company.startsWith(search);
        })
    }
    if(limit){
        sortedproducts = sortedproducts.slice(0,Number(limit))
    }
    if(sortedproducts.length<1){
        // res.status(200).send('No More Products');
        res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedproducts);
    // res.send('Nahi Mile Na')
}
    )

app.get('/custom',(req,res) => {
    const newdata = products.map((product) => {
        const {title, order,company} = product;
        return {title, order,company};
    })
    res.json(newdata);
})

app.get(`/custom/:orderid`,(req,res) => {
    const {orderid} = req.params; 
    const newdata = products.find((product) => {
        if(product.order==Number(orderid)){
            return product;
        }
        else{
            res.status(404).send(`<h1>Order Not Found for ${orderid} </h1>`);
        }
    })
    res.json(newdata);
    console.log(newdata.company + ' Got The Order');
})

app.use('*',(req,res) => {
    res.status(404).send('Resource Not Found');
})