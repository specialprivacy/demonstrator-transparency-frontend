import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('displayers/display-location', 'Integration | Component | displayers/display location', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{displayers/display-location}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#displayers/display-location}}
      template block text
    {{/displayers/display-location}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
