import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PostsNewController extends Controller {
	@service auth;
	@service store;

	description = '';
	start = new Date().toISOString().slice(0,16);
	end = new Date().toISOString().slice(0,16);
	public = false;
	category = null;

	newCategory = {title: '', description: ''};

	@action
	createCategory() {
		this.category = this.store.createRecord('category', this.newCategory);
		this.category.save();
		this.category = this.category.id;
	}

	@action
	createEvent() {
		const cat = this.store.peekRecord('category', this.category);
		const user = this.store.peekRecord('user', this.auth.user.id);
		console.warn(user);
		const newEvent = this.store.createRecord('event', {
			description: this.description,
			start: this.start,
			end: this.end,
			public: this.public,
			category: cat,
			user
		});

		newEvent.save();
	}
}
