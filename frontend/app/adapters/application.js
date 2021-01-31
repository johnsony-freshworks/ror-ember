import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // @service session;

  host = 'http://localhost:3000';
  // namespace = 'api/v1';

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }

  get headers() {
    return {
		'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').getAttribute('content'),
		'Content-Type': 'application/json'
    };
  }

  handleResponse(status, headers, payload, requestData) {
  	console.warn(headers.total)
  	return payload;
  }
}
