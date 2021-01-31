import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
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

	async beforeModel() {
		return this.auth.authenticate();
	}

	async model({page, size: limit} = params) {
		return this.store.query('event', {limit, offset: (page * limit - limit)});
	}
}
