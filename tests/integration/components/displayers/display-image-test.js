import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('displayers/display-image', 'Integration | Component | displayers/display image', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{displayers/display-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#displayers/display-image}}
      template block text
    {{/displayers/display-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
