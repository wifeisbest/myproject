const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class Css {
    index(req,res,next){
        res.render('cs/index')
    }
    
}




module.exports = new Css;
