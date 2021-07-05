const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class Guest {
    aboutme(req,res,next){
        res.render('aboutme/aboutme')
    }
    
}




module.exports = new Guest;
