import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class PostsEditRoute extends Route {
	
	async model(params) {
		return hash({
			categories: this.store.findAll('category'),
			event: this.store.findRecord('event', params.event_id)
		});
	}
	
}
