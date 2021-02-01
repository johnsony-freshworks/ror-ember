import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class AuthService extends Service {
	@service store;
	@service shared;
	_user;
	@tracked isAuthenticated = false;

	async authenticate() {
		const currentuser = await fetch('/currentuser');
		if (currentuser) {
			const user = await currentuser.json();
			user && (this.user = user);
		}
	}

	set user(user) {
		this.isAuthenticated = true;
		this._user = {id: user.data.id, ...user.data.attributes};
		this.shared.toasters = [];
	}

	get user() {
		return this._user;
	}	
}
