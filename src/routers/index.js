const veryfy    = require('../midleware/veryfyToken')

const posts  = require('./posts');
const admin     = require('./admin');


function router (app){
    app.use('/duong',veryfy, admin);

    app.use('/',posts);
    
    
   
}

module.exports = router;
    