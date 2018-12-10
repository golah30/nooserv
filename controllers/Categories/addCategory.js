const mongoose = require('mongoose');

const isValid = body => {
  if (body.title === '') {
    return true;
  } else {
    return false;
  }
};

const addCategory = (req, res) => {
  if (isValid(req.body)) {
    return res.status(400).json({ err: 'Data format is not correct' });
  }

  const Сategories = mongoose.model('categories');
  let Сategory = new Сategories({
    title: req.body.title
  });

  Сategory
    .save()
    .then(item => {
      res.json(item);
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};

module.exports = addCategory;
