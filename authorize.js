const authorize = (req,res,next) => {
    const {user } = req.query;
    if(user == 'john'){
        req.user = { name : 'john', dept : 'Legal'}
        // res.status(200).send('Authorized');
        next();    
    }
    else{
       res.status(401).send('<h1>Unauthorized</h1>');
    }
}

module.exports = authorize;