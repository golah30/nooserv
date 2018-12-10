const mongoose = require('mongoose');

const getCategories = async (req, res) => {
  const Сategories = mongoose.model('categories');
  let response = [];
  try {
    const items = await Сategories.find();

    for (const item of items) {
      let posts = await getPostsGroupdByCategory(item._id);
      response.push({ _id: item._id, title: item.title, posts: posts });
    }

    res.json({ categories: response });
  } catch (e) {
    res.status(400).json({ err: e.message });
  }
};

const getPostsGroupdByCategory = async id => {
  const Posts = mongoose.model('posts');
  const items = await Posts.find({ categoryId: id }, '_id title categoryId');

  return items;
};
module.exports = getCategories;
