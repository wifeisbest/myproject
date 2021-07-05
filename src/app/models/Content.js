const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Atical = new Schema({
    title: {type: String},
    content: { type: String  }
   
  },{
    timestamps: true,
  });

module.exports = mongoose.model('Contents',Atical);