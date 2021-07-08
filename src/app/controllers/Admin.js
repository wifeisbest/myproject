const Ad        = require('../models/Admin');
const bcrypt    = require('bcryptjs');

class Admin {
    index(req,res,next){
        res.render('admin/register')
    }
    adminLogin(req, res, next){
        res.render('admin/login')
    }
    async registed(req,res,next){
        try {           
            const admin = await Ad.create(req.body);
            res.render('admin/login')

        } catch (error) {
            res.json(error)
        }
    }
    async  login(req, res, next) {
        try {
            
            const user = await Ad.findOne({admin: req.body.admin});
            if(!user){
                res.send('user not found')
            }
            if(bcrypt.compareSync(req.body.password, user.password)){
             
                res.send('duong')
             
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
