const express = require('express');
const router = express.Router();

const siteHome = require('../app/controllers/Site');
const guest = require('../app/controllers/Guest');


router.get('/aboutme',guest.aboutme);

router.get('/', siteHome.home)


module.exports = router;
