const getPost = require('./Posts/getPost');
const addPost = require('./Posts/addPost');
const deletePost = require('./Posts/deletePost');
const editPost = require('./Posts/editPost');

const getCategories = require('./Categories/getCategories');
const addCategory = require('./Categories/addCategory');
const deleteCategory = require('./Categories/deleteCategory');
const editCategory = require('./Categories/editCategory');

const addUser = require('./Users/addUser');

const login = require('./login');

const Controller = {
  Posts: {
    get: getPost,
    add: addPost,
    delete: deletePost,
    edit: editPost
  },
  Categories: {
    get: getCategories,
    add: addCategory,
    delete: deleteCategory,
    edit: editCategory
  },
  Auth: {
    login: login
  },
  User: {
    add: addUser
  }
};
module.exports = Controller;
