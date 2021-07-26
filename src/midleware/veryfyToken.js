const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

function verifyToken (req, res, next){
    try {
        const token = req.cookies.token;
        const ketqua = jwt.verify(token, process.env.APP_SECRET);
        if(ketqua){
            next();
        }
    } catch (error) {
        return  res.render('admin/login',{
            style: 'admin.css'
        })
    }
    // const cokie = req.cookie;
    
    // if(cokie === undefined || null){
    //   return  res.render('admin/login',{
    //         style: 'admin.css'
    //     })
    // }else{
        
        
    //     req.user = {userId};
    //     next();
    // }
    
    
    
    // const token = req.cookies.token;
    
    // if(token === undefined || null){
    //     res.render('404')
    // }
    
    // const {userId} = jwt.verify(token, process.env.APP_SECRET);

    // // Assign req
    // req.user = {userId};
    // next();
}

module.exports = verifyToken;
