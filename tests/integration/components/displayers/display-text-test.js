import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('displayers/display-text', 'Integration | Component | displayers/display text', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{displayers/display-text}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#displayers/display-text}}
      template block text
    {{/displayers/display-text}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
