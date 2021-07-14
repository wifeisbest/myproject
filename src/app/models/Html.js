const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Html = new Schema({
    title: {type: String},
    description: { type: String  },
    detail: { type: String  },
    src: { type: String  },
    slug: { type :String, slug: 'title', unique: true}
  },{
    timestamps: true,
  });

module.exports = mongoose.model('Html',Html);
