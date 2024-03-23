const  express  = require('express');
const app = express();
let products = require('./dummy.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(express.static('./app'))

app.use(express.urlencoded({extended: false}))

app.put('/api/chcompany/:order',(req,res) => {
    const { order} = req.params;
    console.log(order);
    const { company } = req.body;
    console.log(company);
    const product = products.find((product) => product.order == Number(order))
    if(!product){
        return res.status(401).send(`<h1>Wrong ${order}</h1>`);
    }
    else {
        const upproduct = products.map(product => {
            product.company = company;
            return product;
        });
        res.status(200).json({success: true, data : upproduct})
    }


})

app.post('/login',(req,res) => {

    const { title, id, ordernum, dates, duties, company } = req.body;
    if(title){
        const newProduct = {
            id: id,
            order: ordernum,
            title: title,
            dates: dates,
            duties: duties, // Assuming duties is a single string, wrap it in an array
            company: company
        };
        const addtoproducts = [newProduct]
        products = [...addtoproducts]
        console.log(products);
        res.status(200).send(`<h1>Welocme Dear. ${newProduct.company} </h1>`);
    }
    else{
        res.status(401).send('Bad Request')
    }
})

app.listen(5000, ()=> {
    console.log('Port Request 5000 listening')
})