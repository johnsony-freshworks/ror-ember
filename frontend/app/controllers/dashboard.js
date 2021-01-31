import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from "@ember/object";
import { inject as service } from '@ember/service';

export default class DashboardController extends Controller {
	@service auth;

	pageCounts = [25, 50, 100];
	pageTitle = 'Freshworks Buzz';

	queryParams = ['page', 'size', 'category'];
	@tracked page = 1;
	@tracked size = this.pageCounts[0];
	@tracked category = null;


	@action
	paginate(page) {
		console.warn(page);
		this.page = page;
	}

	@action
	changeCategory(category) {
		if (category) {
			set(this, "pageTitle", category.title);
			this.category = category.id;

		} else {
			this.category = null;
		}
	}

	get categoryModel() {
		return this.store.findRecord('category', this.category)
			.then(category => {
				return category.title;
			});
	}
}
