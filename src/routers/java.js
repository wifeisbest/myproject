const express   = require('express');
const router    = express.Router();

const java = require('../app/controllers/Javascript')



router.get('/', java.index);


module.exports = router;
