const express = require('express');
const router = express.Router();
const Controller = require('../controllers');

const passport = require('passport');

const isAdmin = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    if (user) {
      console.log('hello ' + user.email);
      return next();
    } else {
      let error = new Error('Unauthorized User');
      error.status = 403;
      next(error);
    }
  })(req, res, next);
};

// router.post('/user', Controller.User.add);
router.post('/login', Controller.Auth.login);

router.get('/categories', Controller.Categories.get);
router.post('/categories', isAdmin, Controller.Categories.add);
router.put('/categories/:id', isAdmin, Controller.Categories.edit);
router.delete('/categories/:id', isAdmin, Controller.Categories.delete);

router.get('/posts/:id', Controller.Posts.get);
router.post('/posts', isAdmin, Controller.Posts.add);
router.put('/posts/:id', isAdmin, Controller.Posts.edit);
router.delete('/posts/:id', isAdmin, Controller.Posts.delete);

module.exports = router;
