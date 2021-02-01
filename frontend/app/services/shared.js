import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SharedService extends Service {
	@tracked _toasters = 'mathan';

	set toasters(toaster) {
		this._toasters = toaster;
	}

	get toasters() {
		return this._toasters;
	}
}
