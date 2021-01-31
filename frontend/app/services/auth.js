import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class AuthService extends Service {
	@service store;
	_user;
	isAuthenticated = false;

	async authenticate() {
		if (document.cookie.match(/^(.*;)?\s*user_credentials\s*=\s*[^;]+(.*)?$/)) {
			this.isAuthenticated = true;
			const user = await fetch('currentuser');
			this.user = await user.json();
		}
	}

	set user(user) {
		this._user = {id: user.data.id, ...user.data.attributes};
	}

	get user() {
		return this._user;
	}	
}
