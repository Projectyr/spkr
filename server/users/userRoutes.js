var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.post('/login', userController.login);
  app.post('/signup', userController.signup);
  app.get('/logout', userController.checkAuth, userController.logout);
  app.get('/:id', userController.checkAuth, userController.serveData);
  app.get('/comm/:id', userController.checkAuth, userController.serveCommData);
  
};
