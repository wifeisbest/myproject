const express   = require('express');
const router    = express.Router();

const css = require('../app/controllers/Css')



router.get('/', css.index);


module.exports = router;
