const express    = require('express');
const router     = express.Router();
const veryfy     = require('../midleware/veryfyToken')
const posts      = require('../app/controllers/postsController');




// show detal one page

// nodejs
router.get('/hello-world-nodejs',posts.helloNodejs)



 
router.get('/createPost',veryfy,posts.createPost);
router.get('/node', posts.postsNode);
router.get('/javascript', posts.postsJs);
router.get('/html', posts.postsHtml);
router.get('/css3', posts.postsCss);

//edit
router.get('/editPost', posts.editPost);
router.get('/:slug', posts.showDetail);
router.get('/post/:id', posts.updatePost);
router.put('/post/:id', posts.putPost)



router.post('/create',posts.submitForm);



router.get('/', posts.home);


module.exports = router;
