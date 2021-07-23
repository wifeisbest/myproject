const Posts = require('../models/Posts');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class PostController {

    async home(req,res,next){
        try {
             const posts = await Posts.find().sort({'src': -1})
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
    // show all Post with category Nodejs
    async postsNode(req,res,next){
      const categoryNode = await Posts.find({category : 'nodejs'}).sort({'src': -1})
            .then(posts =>{res.render('node/index',{
                posts: muti(posts)
            })})
            .catch(next)
      
    }
    // show all post with category js
    async postsJs(req,res,next){
        const categoryJs = await Posts.find({category : 'js'}).sort({'src': -1})
              .then(posts =>{res.render('node/index',{
                  posts: muti(posts)
              })})
              .catch(next)
        
    }
    // show all post with category css
    async postsCss(req,res,next){
        const categoryCss = await Posts.find({category : 'css'}).sort({'src': -1})
              .then(posts =>{res.render('node/index',{
                  posts: muti(posts)
              })})
              .catch(next)
        
    }
    // show all post with category html
    async postsHtml(req,res,next){
        const categoryHml = await Posts.find({category : 'html'}).sort({'src': -1})
              .then(posts =>{res.render('node/index',{
                  posts: muti(posts)
              })})
              .catch(next)
        
    }
    async showDetail(req, res, next){  
        const post = await Posts.findOne({slug: req.params.slug})
            if(post === null){
                 return res.render('404',{
                     title: 'Rất tiếc trang bạn tìm hiện không có',
                     style: 'i404.css'
                 })
            }else{

                res.render('aboutme/showDetail',{
                           post: one(post),                           
                })
            }
            
        
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

    // show one page
    showone(req, res){
        res.render('detail/test',{
            title:'this is one page',
            mieuta: 'this is description'
        })
    }
}




module.exports = new PostController;
