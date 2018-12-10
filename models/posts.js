let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categoriesSchema = new Schema({
  title: String
});

mongoose.model('categories', categoriesSchema);

let postsSchema = new Schema({
  categoryId: String,
  title: String,
  content: String
});

mongoose.model('posts', postsSchema);
