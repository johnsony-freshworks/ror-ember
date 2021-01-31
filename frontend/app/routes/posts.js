import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class PostsRoute extends Route {
  @service store;
  @service auth;

  async beforeModel() {
    return this.auth.authenticate();
  }

  async model() {
    const user = await this.store.findRecord('user', this.auth.user.id);
    return hash({
      categories: this.store.findAll('category'),
      events: user.events
    });
  }
}
