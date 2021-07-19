const express = require('express');
const router = express.Router();

const posts = require('../app/controllers/postsController');
const guest = require('../app/controllers/Guest');


router.get('/aboutme',guest.aboutme);

 
router.get('/createPost', posts.createPost);
router.get('/node', posts.postsNode);

//edit
router.get('/editPost', posts.editPost);
router.get('/:slug', posts.showDetail);
router.get('/post/:id', posts.updatePost);
router.put('/:id', posts.putPost)



router.post('/create',posts.submitForm);



router.get('/', posts.home);

module.exports = router;