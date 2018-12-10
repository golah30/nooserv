const mongoose = require('mongoose');

const deletePost = (req, res) => {
  let id = req.params.id;
  const Posts = mongoose.model('posts');

  Posts.findOneAndDelete({ _id: id })
    .then(item => {
      if (!!item) {
        res.json(item);
      } else {
        res.status(404).json({ err: 'Post not found' });
      }
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};

module.exports = deletePost;
