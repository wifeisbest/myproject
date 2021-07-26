const jwt       = require('jsonwebtoken');

const Ad        = require('../models/Admin');
const bcrypt    = require('bcryptjs');

class Admin {
    index(req,res,next){
        res.render('admin/register',{
            style: 'admin.css'
        })
    }
    adminLogin(req, res, next){
        res.render('admin/login',{
            title: 'Admin login',
            style: 'admin.css'
        })
    }
    async registed(req,res,next){    

        await Ad.create(req.body)
            .then( () => { res.render('admin/login') })
            .catch(next)             
    }
    async  login(req, res, next) {
        try {
            
            const user = await Ad.findOne({admin: req.body.name});
            
            if(!user){
                res.send('user not found')
            }
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({admin: user._id},process.env.APP_SECRET);
                res.json({
                    data: token
                })
             
            }else{
                res.send('password is correct')
                // Error : Password is not correct
            }
        } catch (error) {
           console.log(error)
        }
    }
    
}




module.exports = new Admin;
