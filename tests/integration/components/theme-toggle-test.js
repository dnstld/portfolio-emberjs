import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | theme-toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders as a dark mode', async function(assert) {
    await render(hbs`
      <ThemeToggle @theme="dark">
        template block text
      </ThemeToggle>
    `);

    assert.equal(
      this.element.textContent.trim(), 
      'template block text'
    );

    assert.dom('[data-test-theme-toggle]').hasAttribute('data-theme', 'dark');
  });

  test('it renders as a light mode', async function(assert) {
    await render(hbs`
      <ThemeToggle @theme="light">
        template block text
      </ThemeToggle>
    `);

    assert.equal(
      this.element.textContent.trim(), 
      'template block text'
    );

    assert.dom('[data-test-theme-toggle]').hasAttribute('data-theme', 'light');
  });
});
