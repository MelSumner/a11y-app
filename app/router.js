import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('blue');
  this.route('orange');
  this.route('yellow');
  this.route('red');
  this.route('green');
  this.route('indigo');
  this.route('violet');
});

export default Router;
