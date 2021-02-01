import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';


export default class ToasterComponent extends Component {
	@service shared;
	
}
