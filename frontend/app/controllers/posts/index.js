import Controller from '@ember/controller';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PostsNewController extends Controller {
	@service store;

	@action
	destroy(event) {
		const post = this.store.peekRecord('event', event);
		post.destroyRecord();
	}

	@action
	showComments(event) {
		// this.eventModel = event;
	}
}
