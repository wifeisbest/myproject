const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Atical = new Schema({
    title: {type: String},
    description: { type: String  },
    src: { type: String  },
    category: {type: String},
    slug: { type :String, slug: 'title', unique: true}
  },{
    timestamps: true,
  });

module.exports = mongoose.model('Posts',Atical);
