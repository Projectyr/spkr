var feedbackController = require('./feedbackController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.post('/', feedbackController.add); 
  //app.get('/presentation/:id', presentationsController.onePres);
}; 
