const mongoose = require('mongoose');

const isValid = body => {
  if (body.categoryId === '' || body.title === '' || body.content === '') {
    return true;
  } else {
    return false;
  }
};

const addPost = (req, res) => {
  if (isValid(req.body)) {
    return res.status(400).json({ err: 'Data format is not correct' });
  }
  const Posts = mongoose.model('posts');
  let Post = new Posts({
    categoryId: req.body.categoryId,
    title: req.body.title,
    content: req.body.content
  });

  Post.save()
    .then(item => {
      res.json(item);
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};

module.exports = addPost;
