const jwt = require('jsonwebtoken');


function verifyToken (req, res, next){
    // get token
    const token = req.cookies.token;
    
    if(token === undefined){
        res.redirect('/')
    }
    
    const {userId} = jwt.verify(token, process.env.APP_SECRET);

    // Assign req
    req.user = {userId};
    next();
}

module.exports = verifyToken;
