const  express  = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan')

// app.use([logger,authorize])
app.use(express.static('./app'))
// app.use(morgan('tiny'))
app.get('/',(req,res) => {
    res.send('<h1>Welcome</h1>');
})

// app.use(express.static('./app'))

app.get('/about',(req,res) => {
    res.send(req.user);
})

app.listen(5000, ()=> {
    console.log('Port Request 5000 listening')
})