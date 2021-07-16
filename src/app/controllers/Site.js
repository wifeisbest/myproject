const contentPost = require('../models/Content');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class SiteController {

    async home(req,res,next){
        try {
             const posts = await contentPost.find({})
                .then(posts => res.render('home',{
                    posts: muti(posts),
                    style: 'home.css',
                    title : 'XYZABC - Chia sẻ học viết mã của người tay ngang'
                }))
             .catch(next);

        } catch (error) {
            res.json(error)
        }
    }
    async showDetail(req, res, next){
        await contentPost.findOne({slug: req.params.slug})
            .then(post => res.render('aboutme/showDetail',{
                post: one(post),
                title: post.title
            }))
        .catch(next);
    }
    createPost(req, res, next){
        res.render('aboutme/createPosts',{
            layout: 'panel'
        })
    }
    loginWhenTokenDie(req, res, next){
        res.render('admin/login')
    }
    async submitForm(req, res, next){
        try {           
            const post = await contentPost.create(req.body);
            res.render('home')

        } catch (error) {
            res.json(error)
        }
    }
}




module.exports = new SiteController;
