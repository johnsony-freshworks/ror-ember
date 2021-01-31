import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class PostsController extends Controller {
	@service auth;
	@service store;
}
