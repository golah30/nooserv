const mongoose = require('mongoose');
const User = mongoose.model('User');

const addUser = async (req, res, next) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).json({ err: 'Data format is not correct' });
  }
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.json({ id: user._id, email: user.email });
  } catch (err) {
    res.status = 400;
    res.json(err);
  }
};

module.exports = addUser;
