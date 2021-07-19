const express   = require('express');
const router    = express.Router();

const admin = require('../app/controllers/Admin')





router.post('/register', admin.registed)
router.post('/login', admin.login)

router.get('/admin', admin.adminLogin)

router.get('/', admin.index);



module.exports = router;
