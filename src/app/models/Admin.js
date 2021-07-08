const mongoose  = require('mongoose');
const bcrypt    = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  admin:{type : String, unique: true, trim: true, require: [true,'Name must be require']},
  password:{type : String, trim:true, require: [true,'Password must be require'], minlength:[6,
  'Password must be at least 6 characters']}
},{timestamps: true})

adminSchema.pre('save',function(next){
  let user = this;
  bcrypt.hash(user.password,10,function(error,hash){
      if(error){
          return next(error)
      }else{
          user.password= hash;
          next()
      }
  })
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
