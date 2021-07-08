const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class SiteController {
    home(req, res ,next){
        res.render('home')
    }
    
}




module.exports = new SiteController;
