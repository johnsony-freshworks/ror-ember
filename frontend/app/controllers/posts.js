import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PostsController extends Controller {

	@service auth;
	@service store;
	
}
