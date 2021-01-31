import { helper } from '@ember/component/helper';
import { htmlSafe as htmlsafe } from '@ember/template';

export function htmlSafe(params) {
  return htmlsafe(params.join(''));
}

export default helper(htmlSafe);
