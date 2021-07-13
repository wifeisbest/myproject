const express   = require('express');
const router    = express.Router();

const node = require('../app/controllers/Node')



router.post('/create', node.savePostInDb);

router.put('/:id', node.putUpdate);

router.get('/create', node.createPosts);
router.get('/up-del', node.nodeUpdate);
router.get('/update/:id', node.getUpdate);
router.get('/:slug', node.showDetail);


router.get('/', node.index);


module.exports = router;
