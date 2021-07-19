const Posts = require('../models/Posts');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class PostController {

    async home(req,res,next){
        try {
             const posts = await Posts.find({})
                .then(posts => res.render('home',{
                    posts: muti(posts),
                    style: 'home.css',
                    title : 'XYZABC - Chia sẻ học viết mã của người tay ngang',
                    layout: 'home'
                }))
                .catch(next);

        } catch (error) {
            res.json(error)
        }
    }
    async postsNode(req,res,next){
      const categoryCss = await Posts.find({category : 'css'})
            .then(posts =>{res.render('node/index',{
                posts: muti(posts)
            })})
            .catch(next)
      
    }
    async showDetail(req, res, next){  
         await Posts.findOne({slug: req.params.slug})
            .then(post => res.render('aboutme/showDetail',{
                post: one(post),
                
            }))
            .catch(next);
    }
    createPost(req, res, next){
        res.render('aboutme/createPosts',{
            layout: 'panel'
        })
    }
    
    async submitForm(req, res, next){
        try {           
            const post = await Posts.create(req.body);
            res.redirect('/')

        } catch (error) {
            res.json(error)
        }
    }

    // Edit Post

    async editPost(req, res, next){
        try {           
            const post = await Posts.find({})
                .then( posts => res.render('aboutme/editPost',{
                    posts: muti(posts),
                    layout: 'panel'
                }))
                .catch(next)
            

        } catch (error) {
            res.json(error)
        }
    }
    async updatePost(req, res, next){
        await Posts.findById(req.params.id)
            .then(post => res.render('aboutme/updatePost',{
                post : one(post),
                layout: 'panel'
            }))
            .catch(next);
        
    }
    async putPost(req, res, next){
        await Posts.updateOne({_id: req.params.id}, req.body)
           .then(()=> res.redirect('/'))
           .catch(next)        
       }
}




module.exports = new PostController;
