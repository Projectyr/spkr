describe('Routing', function () {
  var $route;
  beforeEach(module('spkr'));

  beforeEach(inject(function($injector){
    $route = $injector.get('$route');
  }));

  it('Should have root ('/') route that is linked to the landing page', function () {
    expect($route.routes['/']).to.be.ok();
    expect($route.routes['/'].controller).to.be('AuthController');
    expect($route.routes['/'].templateUrl).to.be('app/auth/landing.html');
  });

  it('Should have /landing route, template, and controller', function () {
    expect($route.routes['/landing']).to.be.ok();
    expect($route.routes['/landing'].controller).to.be('AuthController');
    expect($route.routes['/landing'].templateUrl).to.be('app/auth/landing.html');
  });

  it('Should have /login route, template, and controller', function () {
    expect($route.routes['/login']).to.be.ok();
    expect($route.routes['/login'].controller).to.be('AuthController');
    expect($route.routes['/login'].templateUrl).to.be('app/auth/login.html');
  });

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/signup']).to.be.ok();
    expect($route.routes['/signup'].controller).to.be('AuthController');
    expect($route.routes['/signup'].templateUrl).to.be('app/auth/signup.html');
  });

  it('Should have /feedback-form route, template, and controller', function () {
    expect($route.routes['/feedback-form']).to.be.ok();
    expect($route.routes['/feedback-form'].controller).to.be('FeedbackController');
    expect($route.routes['/feedback-form'].templateUrl).to.be('app/feedback-form/feedback-form.html');
  });

  it('Should have /feedback-form/:id route, template, and controller', function () {
    expect($route.routes['/feedback-form/:id']).to.be.ok();
    expect($route.routes['/feedback-form/:id'].controller).to.be('FeedbackController');
    expect($route.routes['/feedback-form/:id'].templateUrl).to.be('app/feedback-form/feedback-form.html');
  });  

  it('Should have /homepage route, template, and controller', function () {
    expect($route.routes['/homepage']).to.be.ok();
    expect($route.routes['/homepage'].controller).to.be('HomepageController');
    expect($route.routes['/homepage'].templateUrl).to.be('app/homepage/homepage.html');
  });

  it('Should have /new-form route, template, and controller', function () {
    expect($route.routes['/new-form']).to.be.ok();
    expect($route.routes['/new-form'].controller).to.be('NewFormController');
    expect($route.routes['/new-form'].templateUrl).to.be('app/new-form/newForm.html');
  });  

  it('Should have /previous-forms route, template, and controller', function () {
    expect($route.routes['/previous-forms']).to.be.ok();
    expect($route.routes['/previous-forms'].controller).to.be('PrevFormsController');
    expect($route.routes['/previous-forms'].templateUrl).to.be('app/previous-forms/previousForms.html');
  });

  it('Should have /logout route, template, and controller', function () {
    expect($route.routes['/logout']).to.be.ok();
    expect($route.routes['/logout'].controller).to.be('AuthController');
    expect($route.routes['/logout'].templateUrl).to.be('app/auth/landing.html');
  });  

});