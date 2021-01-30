import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
	@service auth;

	queryParams = ['page', 'size'];
	@tracked page = 1;
	@tracked size = 5;

	@action
	paginate(page) {

		console.warn($('body').attr('class'));
		console.warn(moment().format())
		// this.size++;
		this.page = page;
	}

	@action
	setDateRange(d) {
		console.warn('setDateRange',d);
	}

	@action
	hideDatePicker(d) {
		console.warn('hideDatePicker',d);
	}

	@action
	cancelDatePicker(d) {
		console.warn('cancelDatePicker',d);
	}
}
