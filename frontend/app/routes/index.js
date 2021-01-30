import Route from '@ember/routing/route';
// import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
	@service store;
	@service auth;

	queryParams = {
		page: {
			refreshModel: true,
			replace: false
		},
		size: {
			refreshModel: true,
			replace: false
		}
	}

	async model({page, size: limit} = params) {

		let response = await fetch('/currentuser');
		this.auth.currentuser = await response.json();

		return this.store.query('event', {limit, offset: (page * limit - limit)});
	}
}
