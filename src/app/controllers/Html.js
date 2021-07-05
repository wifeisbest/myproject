const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class Html {
    index(req,res,next){
        res.render('html/index')
    }
    
}




module.exports = new Html;
