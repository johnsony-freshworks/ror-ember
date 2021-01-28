import Route from '@ember/routing/route';
// import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
	@service store;
	@service auth;

	// async model() {
	// 	let response = await fetch('/currentuser');
	// 	this.auth.currentuser = await response.json();


	// 	// this.store.find('user', 1)
	// 		// .then(user => user.get('events'))


	// 	const events = await this.store.findAll('event');
	// 	return events;
	// }
}
