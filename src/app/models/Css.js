const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Css = new Schema({
    title: {type: String},
    description: { type: String  },
    detail: { type: String  },
    slug: { type :String, slug: 'title', unique: true}
  },{
    timestamps: true,
  });

module.exports = mongoose.model('Css',Css);
