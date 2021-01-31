import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.route('posts', function() {
    this.route('new');
    this.route('edit', { path: '/:event_id' });
  });
});
