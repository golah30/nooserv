const mongoose = require('mongoose');

const isValid = body => {
  if (body.title === '') {
    return true;
  } else {
    return false;
  }
};

const editCategory = (req, res) => {
  if (isValid(req.body)) {
    return res.status(400).json({ err: 'Data format is not correct' });
  }
  let id = req.params.id;
  let data = {
    title: req.body.title
  };
  const Сategories = mongoose.model('categories');
  Сategories
    .findOneAndUpdate(
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
        res.status(404).json({ err: 'Category not found' });
      }
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};

module.exports = editCategory;
