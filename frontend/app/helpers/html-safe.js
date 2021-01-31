import { helper } from '@ember/component/helper';
import Ember from 'ember';

export default helper(function htmlSafe(params/*, hash*/) {
  return Ember.String.htmlSafe(params.join(''));
});