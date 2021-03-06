import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

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
    },
    category: {
      refreshModel: true,
      replace: false
    }
  }

  async beforeModel() {
    return this.auth.authenticate();
  }

  async model(params) {
    const { page, category, size: limit } = params;

    return hash({
      categories: this.store.findAll('category'),
      events: this.store.query('event', {
        limit,
        offset: (((page || 1) - 1) * limit + 1) - 1,
        category
      })
    });
  }
}
