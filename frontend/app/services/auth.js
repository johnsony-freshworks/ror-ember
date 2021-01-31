import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class AuthService extends Service {
	@service store;
	_user;
	isAuthenticated = false;

	async authenticate() {
		const currentuser = await fetch('currentuser');
		debugger;
		if (currentuser) {
			this.isAuthenticated = true;
			const user = await currentuser.json();
			user && (this.user = user);
		}
	}

	set user(user) {
		this._user = {id: user.data.id, ...user.data.attributes};
	}

	get user() {
		return this._user;
	}	
}
