const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class Node {
    index(req,res,next){
        res.render('node/index')
    }
    
}




module.exports = new Node;
