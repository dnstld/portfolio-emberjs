import Component from '@ember/component';

export default Component.extend({
  classNames: 'theme-toggle',
  attributeBindings: ['theme:data-theme'],
});
