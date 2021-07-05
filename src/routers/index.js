const siteHome = require('./home')



function router (app){
    app.use('/',siteHome);
}

module.exports = router;
