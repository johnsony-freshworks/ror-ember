import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {

  host = 'http://localhost:3000';

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }

  get headers() {
    return {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').getAttribute('content'),
      'Content-Type': 'application/json'
    };
  }
}
