const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class SiteController {
    home(req, res ,next){
        res.render('home')
    }
    getsiteHome(req,res,next){
        res.render('siteHome')
    }
    // [GET] all post
    getAll(req,res,next){
        contentPost.find({})
            .then(posts => res.render('siteHome',{posts : muti(posts),layout : false}))
            .catch(next)
    }
    // [POST] /post
    sumitForm(req,res,next){
        const content = new contentPost(req.body);
        content.save()
            .then(()=> res.redirect('siteHome'))
            .catch(next);
    } 
}




module.exports = new SiteController;
