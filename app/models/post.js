import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    timestamp: DS.attr('string'),
    description: DS.attr('string'),
    body: DS.attr('string')
});
