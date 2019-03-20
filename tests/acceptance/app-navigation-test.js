import { module, test } from 'qunit';
import { 
  visit, 
  currentURL, 
  click
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | app navigation', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('should navigate to home page', async function(assert) {
    await visit('/about');
    await click('[data-test-link-to-home]');

    assert.equal(
      currentURL(),
      '/',
      'should navigate to home page'
    )
  });

  test('should navigate to about page', async function(assert) {
    await visit('/');
    await click('[data-test-link-to-about]');

    assert.equal(
      currentURL(),
      '/about',
      'should navigate to about page'
    )
  });

  test('should navigate to portfolio page', async function(assert) {
    await visit('/');
    await click('[data-test-link-to-portfolio]');

    assert.equal(
      currentURL(),
      '/portfolio',
      'should navigate to portfolio page'
    )
  });

  test('should navigate to contact page', async function(assert) {
    await visit('/');
    await click('[data-test-link-to-contact]');

    assert.equal(
      currentURL(),
      '/contact',
      'should navigate to contact page'
    )
  });
});