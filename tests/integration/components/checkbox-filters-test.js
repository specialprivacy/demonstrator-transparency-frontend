import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkbox-filters', 'Integration | Component | checkbox filters', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checkbox-filters}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checkbox-filters}}
      template block text
    {{/checkbox-filters}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
