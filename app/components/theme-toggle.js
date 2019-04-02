import Component from '@ember/component';

export default Component.extend({
  classNames: 'C--theme-toggle',
  attributeBindings: ['theme:data-theme'],
});
