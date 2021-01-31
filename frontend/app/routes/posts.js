import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
	@service store;
	@service auth;

	async beforeModel() {
		return this.auth.authenticate();
	}

	async model() {
		return Ember.RSVP.hash({
			categories: this.store.findAll('category'),
			events: this.store.findAll('event')
		});
	}
}
