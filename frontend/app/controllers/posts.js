import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PostsController extends Controller {
	@service auth;

	content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores accusamus, vel, aut sint, sunt quidem assumenda, inventore officia praesentium voluptatum ipsum cum tempora impedit. Tempora placeat repellat ipsam sequi eum.';
	test = 'Johnson';
}
