import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('posts', { path: '/' });
    this.route('new', { path: '/new' });
    this.route('post', { path: '/post/:post_id' });
    this.route('edit', { path: '/edit/:post_id' });
});

export default Router;
