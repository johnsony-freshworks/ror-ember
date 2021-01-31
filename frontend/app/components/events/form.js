import Component from '@glimmer/component';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class EventsFormComponent extends Component {
	@service auth;
	@service store;

	description = this.args.model.event ? this.args.model.event.description : '';
	start = this.args.model.event ? (this.args.model.event.start).slice(0,16) : new Date().toISOString().slice(0,16);
	end = this.args.model.event ? (this.args.model.event.end).slice(0,16) : new Date().toISOString().slice(0,16);
	public = this.args.model.event && this.args.model.event.public;
	@tracked category = null;

	newCategory = {title: '', description: ''};

	@action
	createCategory() {
		const newCategory = this.store.createRecord('category', this.newCategory);
		newCategory.save();
		this.category = String(newCategory.id);
	}

	@action
	submitEvent() {
		const category = this.store.peekRecord('category', this.category);
		const user = this.store.peekRecord('user', this.auth.user.id);

		if (this.args.model.event.id) {
			this.store.findRecord('event', this.args.model.event.id).then(event => {
				event.description = this.description;
				event.start = this.start;
				event.end = this.end;
				event.public = this.public;
				event.category = category;

				event.save();
			});
		} else {
			const newEvent = this.store.createRecord('event', {
				description: this.description,
				start: this.start,
				end: this.end,
				public: this.public,
				category,
				user
			});

			newEvent.save();
		}
	}

}
