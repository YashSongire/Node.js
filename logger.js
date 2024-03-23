// MiddleWare Technologies

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const day = new Date().getDate();
    console.log(method,url,day);
    next();
}

module.exports = logger;