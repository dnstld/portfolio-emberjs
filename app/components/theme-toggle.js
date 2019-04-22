import Component from '@ember/component';

export default Component.extend({
  'data-test-theme-toggle': '',
  classNames: 'C--theme-toggle',
  attributeBindings: ['theme:data-theme'],
});
