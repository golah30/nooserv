const mongoose = require('mongoose');

const isValid = body => {
  if (body.categoryId === '' || body.title === '' || body.content === '') {
    return true;
  } else {
    return false;
  }
};

const editPost = (req, res) => {
  if (isValid(req.body)) {
    return res.status(400).json({ err: 'Data format is not correct' });
  }
  let id = req.params.id;
  let data = {
    categoryId: req.body.categoryId,
    title: req.body.title,
    content: req.body.content
  };
  const Posts = mongoose.model('posts');
  Posts.findOneAndUpdate(
    { _id: id },
    {
      $set: data
    },
    { new: true }
  )
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

module.exports = editPost;
