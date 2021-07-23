require('dotenv').config();

// ========== Require Framwork =============\\
const express            = require('express');
const app                = express();
const port               = process.env.PORT || 3000;
const hdbs               = require('express-handlebars');
const path               = require('path');
const methodOverride     = require('method-override');
const morgan             = require('morgan');
const cookieParser       = require('cookie-parser') ;  
const helmet             = require('helmet');
// ============== =============\\

app.engine('.hbs',hdbs({
    extname: '.hbs'  
}));
app.set('view engine','.hbs');
app.set('views',path.join(__dirname, 'resourse','views'));
app.use(helmet());
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.disable('X-Powered-By');

// =========== Require local file================\\

const Router = require('./routers')
Router(app);

const db= require('./config/db');
db.connect();




app.listen(port, ()=> console.log(`App listent${port}`));

