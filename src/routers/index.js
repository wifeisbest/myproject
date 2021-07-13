const veryfy    = require('../midleware/veryfyToken')

const siteHome  = require('./home');
const node      = require('./node');
const java      = require('./java');
const css       = require('./css');
const html      = require('./html');
const admin     = require('./admin');


function router (app){
    app.use('/duong',veryfy, admin);

    app.use('/javascript',java)
    app.use('/html',html)
    app.use('/cacadin',css)
    app.use('/node',node);
    app.use('/',siteHome);
   
}

module.exports = router;
