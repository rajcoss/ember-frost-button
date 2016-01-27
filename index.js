/* globals module */
/* jshint node: true */

'use strict';

var pkg = require('./package.json');

module.exports = {
	name: pkg.name,

	included: function(app) {
		this._super.included(app);
	}
};
