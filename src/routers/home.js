const express = require('express');
const router = express.Router();

const siteHome = require('../app/controllers/Site');
const guest = require('../app/controllers/Guest');


router.get('/aboutme',guest.aboutme);

router.get('/', siteHome.home);
router.get('/createPost', siteHome.createPost);
router.get('/:slug', siteHome.showDetail);

router.post('/create',siteHome.submitForm);


router.get('/login', siteHome.loginWhenTokenDie);
module.exports = router;
