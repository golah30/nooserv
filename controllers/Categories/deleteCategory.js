const mongoose = require('mongoose');

const deleteCategory = (req, res) => {
  let id = req.params.id;
  const Categories = mongoose.model('categories');
  Categories.findOneAndDelete({ _id: id })
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

module.exports = deleteCategory;
