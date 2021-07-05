const express   = require('express');
const router    = express.Router();

const html = require('../app/controllers/Html')



router.get('/', html.index);


module.exports = router;
