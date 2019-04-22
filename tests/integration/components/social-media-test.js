import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | social-media', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<SocialMedia />`);

    assert.dom('[data-test-social-media="github"]').exists();
    assert.dom('[data-test-social-media="github"]').hasAttribute('href', 'https://github.com/dnstld');
    assert.dom('[data-test-social-media="twitter"]').exists();
    assert.dom('[data-test-social-media="twitter"]').hasAttribute('href', 'https://twitter.com/dnstld');
    assert.dom('[data-test-social-media="instagram"]').exists();
    assert.dom('[data-test-social-media="instagram"]').hasAttribute('href', 'https://www.instagram.com/denistoledodev');
    assert.dom('[data-test-social-media="linkedin"]').exists();
    assert.dom('[data-test-social-media="linkedin"]').hasAttribute('href', 'https://www.linkedin.com/in/denistoledo');
  });
});
