const Posts = require('../models/Posts');
const {one} = require('../../until/mongoose')
const {muti} = require('../../until/mongoose')

class PostController {

    async home(req,res,next){
        try {
             const posts = await Posts.find().sort({'stt': 1})
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
    // show all Post with category Nodejs 1 tu nho den lon
    async postsNode(req,res,next){
      const categoryNode = await Posts.find({category : 'nodejs'}).sort({'stt': 1})
            .then(posts =>{res.render('node/index',{
                posts: muti(posts),
                style: 'nodeindex.css',
                title : 'Nodejs cơ bản cho người mới',
                mieuta: 'Nodejs cơ bản cho người mới tinh, tất cả mọi thứ về nodejs, nền tảng tuyệt vời dành cho các ứng dụng Web và blog cá nhân'
            })})
            .catch(next)
      
    }
    // show all post with category js
    async postsJs(req,res,next){
        const categoryJs = await Posts.find({category : 'js'}).sort({'stt': 1})
              .then(posts =>{res.render('node/index',{
                posts: muti(posts),
                style: 'nodeindex.css',
                title : 'Javascript cơ bản nhất cho người mới',
                mieuta: 'Javascript cơ bản nhất cho người mới đầu học tập và tìm hiểu về Javascript, ngôn ngữ tuyệt vời cho các ứng dụng Website và blog',
              })})
              .catch(next)
        
    }
    // show all post with category css
    async postsCss(req,res,next){
        const categoryCss = await Posts.find({category : 'css'}).sort({'stt': 1})
              .then(posts =>{res.render('node/index',{
                posts: muti(posts),
                style: 'nodeindex.css',
                title : 'CSS cơ bản cho người mới',
                mieuta: 'CSS cơ bản cho người mới, trang trí website, blog với các thuộc tính cơ bản nhất của CSS'
              })})
              .catch(next)
        
    }
    // show all post with category html
    async postsHtml(req,res,next){
        const categoryHml = await Posts.find({category : 'html'}).sort({'stt': 1})
              .then(posts =>{res.render('node/index',{
                posts: muti(posts),
                style: 'nodeindex.css',
                title : 'HTML cơ bản cho người mới',
                mieuta : 'HTML cơ bản cho người mới, ngôn ngữ định hình nên bộ khung website, blog.',
              })})
              .catch(next)
        
    }
    // outline 
    async outline(req,res,next){
        const categoryOutline = await Posts.find({category : 'outline'}).sort({'stt': 1})
              .then(posts =>{res.render('node/index',{
                posts: muti(posts),
                style: 'nodeindex.css',
                title : 'Chuyện bên lề',
                mieuta : 'Các kiến thức cơ bản ngoài HTML, Nodejs, Javascript Css, HTML mà ai cũng nên biết',
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
                           style: 'home.css'                           
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

    // show detail one page
    //nodejs
    helloNodejs(req, res){
        res.render('detail/nodejs/hello',{
            style: 'detail.css',
            title:'Hello world Nodejs',
            mieuta: 'Bài đầu tiên của tất cả lập trình viên'
        })
    }
}




module.exports = new PostController;
