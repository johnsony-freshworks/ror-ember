import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class EventModel extends Model {
  @attr('string') description;
  @attr('string') start;
  @attr('string') end;
  @attr('boolean') public;
  @belongsTo user;
  @belongsTo category;
  @hasMany comments;
}
