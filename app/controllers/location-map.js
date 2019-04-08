import Controller, {
  inject as controller
} from '@ember/controller';


export default Controller.extend({
  applicationController: controller('application'),
  isDark: Ember.computed.reads('applicationController.isDark')
});
