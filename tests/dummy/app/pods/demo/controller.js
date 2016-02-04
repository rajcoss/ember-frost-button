import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    click () {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
