import Service from '@ember/service';
// import { tracked } from '@glimmer/tracking';

export default class AuthService extends Service {
	_user;
	isloggedIn = false;

	set currentuser(user) {
		if (user) {
			this._user = user;
			this.isloggedIn = true;
		}
	}

	get currentuser() {
		return this._user;
	}	
}
