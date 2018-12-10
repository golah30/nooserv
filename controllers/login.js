const passport = require('passport');
const jwtsecret = 'mysecretkey';
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  await passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      let error = new Error(
        'Нет такого пользователя, или пароль не правильный'
      );
      error.status = 403;
      next(error);
    } else {
      const payload = {
        id: user._id,
        email: user.email
      };
      const token = jwt.sign(payload, jwtsecret);
      // console.log('token: ' + 'Bearer ' + token);

      res.json({
        auth: true,
        token: 'Bearer ' + token
      });
    }
  })(req, res, next);
};

module.exports = login;
