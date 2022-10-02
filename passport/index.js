const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');
const Post = require('../models/post');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ 
      where: { id },
      include: [{
        model: User,
        attributes: ['userId', 'nick'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['userId', 'nick'],
        as: 'Followings'
      }, {
        model: Post,
        as: 'LikePosts'
      }]
     })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};