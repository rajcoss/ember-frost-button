import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    action() {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      });
    }
  }
});
