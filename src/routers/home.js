const express = require('express');
const router = express.Router();

const siteHome = require('../app/controllers/Site');

router.get('/siteHome',siteHome.getsiteHome)
router.get('/all',siteHome.getAll)
router.post('/post', siteHome.sumitForm);
router.get('/', siteHome.home)


module.exports = router;
