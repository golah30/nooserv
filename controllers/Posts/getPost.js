const mongoose = require('mongoose');

const getPost = (req, res) => {
  let id = req.params.id;
  const Posts = mongoose.model('posts');

  Posts.findById(id)
    .then(item => {
      if (!!item) {
        res.json({ post: item });
      } else {
        res.status(404).json({ err: 'Post not found' });
      }
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};

module.exports = getPost;
