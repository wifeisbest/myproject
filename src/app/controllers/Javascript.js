const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class Javascript {
    index(req,res,next){
        res.render('java/index')
    }
    
}




module.exports = new Javascript;
