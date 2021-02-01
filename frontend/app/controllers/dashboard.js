import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from "@ember/object";
import { inject as service } from '@ember/service';

export default class DashboardController extends Controller {
	@service auth;
	@service store;
	@service shared;

	pageCounts = [25, 50, 100];
	pageTitle;

	queryParams = ['page', 'size', 'category'];
	@tracked page = 1;
	@tracked size = this.pageCounts[0];
	@tracked category = null;
	@tracked eventModel;
	@tracked newComment = '';

	@action
	paginate(page) {
		this.page = page;
	}

	@action
	changeCategory(category) {
		if (category) {
			set(this, "pageTitle", category.title);
			this.category = category.id;

		} else {
			this.category = null;
			set(this, "pageTitle", null);
		}

		this.shared.toasters = 'johnson';

		// $(".toast").toast('show');
	}

	get categoryModel() {
		return this.store.findRecord('category', this.category)
			.then(category => {
				return category.title;
			});
	}

	@action
	showComments(event) {
		this.eventModel = event;
	}

	@action
	async addComment() {
		const user = await this.store.peekRecord('user', this.auth.user.id);
		const comment = this.store.createRecord('comment', {
			comment: this.newComment,
			event: this.eventModel,
			user
		});

		comment.save();
	}
}
