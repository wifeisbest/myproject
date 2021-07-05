const express   = require('express');
const router    = express.Router();

const node = require('../app/controllers/Node')



router.get('/', node.index);


module.exports = router;
