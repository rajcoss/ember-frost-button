import Ember from 'ember'
import layout from '../templates/components/frost-button'
import _ from 'lodash/lodash'

/**
 * Add the appropriate class for the given priority to the Array of classes
 * @param {String} priority - the priority to add
 * @param {String[]} classes - the classes to add the priority class to
 */
function addPriorityClass (priority, classes) {
  switch (priority) {
    case 'confirm': // fallthrough
    case 'primary':
      classes.push('primary')
      break
    case 'normal': // fallthrough
    case 'secondary':
      classes.push('secondary')
      break
    case 'cancel': // fallthrough
    case 'tertiary':
      classes.push('tertiary')
      break
    default:
      // no class to add for invalid priority
      break
  }
}

/**
 * Add the appropriate class for the given size to the Array of classes
 * Right now, this function seems a little odd/unnecessary, but we may want some
 * aliases later, so we may as well have it set up like priority.
 *
 * @param {String} size - the size to add
 * @param {String[]} classes - the classes to add the size class to
 */
function addSizeClass (size, classes) {
  switch (size) {
    case 'small':
      classes.push('small')
      break
    case 'medium':
      classes.push('medium')
      break
    case 'large':
      classes.push('large')
      break
    case 'extra-large':
      classes.push('extra-large')
      break
    default:
      // no class to add for invalid size
      break
  }
}

export default Ember.Component.extend({
  tagName: 'button',
  classNames: [
    'frost-button'
  ],
  classNameBindings: [
    'disabled',
    'extraClasses'
  ],
  attributeBindings: [
    'autofocus',
    'disabled',
    'type',
    'title'
  ],

  autofocus: false,
  disabled: false,
  layout,
  type: 'button',

  title: null,

  /**
   * Currently there are 3 levels of priority:
   *
   * 'primary' - a call-to-action button
   * 'secondary' - a more standard/normal button
   * 'tertiary' - a muted button (for things like cancel)
   *
   * We also support the following aliases for the above priorities
   *
   * 'confirm' => 'primary'
   * 'normal' => 'secondary'
   * 'cancel' => 'tertiary'
   */
  priority: 'confirm',

  /**
   * How big do you want your button?
   * Currently available options are:
   * ['small', 'medium', 'large', 'extra-large']
   */
  size: 'medium',

  /**
   * The text to display within this button
   */
  text: '',

  /**
   * The icon to display within this button
   */
  icon: '',

  /**
   * The subtext to display within this button (goes below the text)
   */
  subtext: '',

  /**
   * True if only the text property is given, and not icon or subtext
   */
  isTextOnly: Ember.computed('text', 'icon', 'subtext', function () {
    return (this.get('text')) && !(this.get('icon') || this.get('subtext'))
  }),

  /**
   * True if only the icon property is given, and not text or subtext
   */
  isIconOnly: Ember.computed('text', 'icon', 'subtext', function () {
    return (this.get('icon')) && !(this.get('text') || this.get('subtext'))
  }),

  /**
   * True if both the icon and text properties are given, but no subtext
   */
  isIconAndText: Ember.computed('text', 'icon', 'subtext', function () {
    return ((this.get('icon') && this.get('text')) && !this.get('subtext'))
  }),

  /**
   * True if all three properties of 'icon', 'text', and 'subtext' are given
   */
  isInfo: Ember.computed('text', 'icon', 'subtext', function () {
    return (this.get('icon') && this.get('text') && this.get('subtext'))
  }),

  extraClasses: Ember.computed('priority', function () {
    const classes = []
    addSizeClass(this.get('size'), classes)
    addPriorityClass(this.get('priority'), classes)
    return classes.join(' ')
  }),

  onclick: Ember.on('click', function (event) {
    if (!Ember.ViewUtils.isSimpleClick(event)) {
      return true
    }

    if (!this.get('disabled') && _.isFunction(this.attrs['on-click'])) {
      this.attrs['on-click'](this.get('id'))
    }
  })
})
