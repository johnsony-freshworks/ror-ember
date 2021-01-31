import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsEditRoute extends Route {
	
	async model(params) {
		return Ember.RSVP.hash({
			categories: this.store.findAll('category'),
			event: this.store.findRecord('event', params.event_id)
		});
	}
	
}
