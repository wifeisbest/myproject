

const nodejs = require('../models/Nodejs');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class Node {
    //show all posts
    async index(req,res,next){
        try {
             const posts = await nodejs.find({})
                .then(posts => res.render('node/index',{
                    posts: muti(posts),
                    style: 'node.css',
                    title : 'Nodejs - Nền tảng tạo nên blog'
                }))
                .catch(next);

        } catch (error) {
            res.json(error)
        }
    }
    async showDetail(req, res, next){
        await nodejs.findOne({slug: req.params.slug})
            .then(post => res.render('node/showDetail',{
                post: one(post),
                title: post.title
            }))
            .catch(next);
    }
    createPosts (req, res , next){
        res.render('node/createPosts',{layout : 'panel'})
    }
    async savePostInDb(req,res,next){
        try {           
            const post = await nodejs.create(req.body);
            res.render('node/index')

        } catch (error) {
            res.json(error)
        }
    }
    //Up-del
    async nodeUpdate(req, res, next){
        await  nodejs.find({})
            .then(posts => res.render('node/up-del',{
                posts : muti(posts)
            }))
            .catch(next);
    }
    // get update
    async getUpdate(req, res, next){
        await nodejs.findById(req.params.id)
            .then(post => res.render('node/getUpdate',{
                post : one(post)
            }))
            .catch(next);        
   }
   //put update
   async putUpdate(req, res, next){
     await nodejs.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/node'))
        .catch(next)        
    }
}




module.exports = new Node;
