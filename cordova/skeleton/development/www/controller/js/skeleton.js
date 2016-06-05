define(['require', 'exports', './main'], function (require, exports, main) {
	'use strict';

	var Skeleton = function Skeleton(options) {
		var self = this;

		this.controller = {};

		this.model = {};

		this.view = {};

		this.initialize = function (options) {
			self.controller.main = main;
		}

		self.initialize(options);
	}

	var skeleton = new Skeleton();
	
	if (typeof window != 'undefined' && typeof GLOBAL == 'undefined') {
		window.GLOBAL = window;
	}
	
	if (typeof window == 'undefined' && typeof GLOBAL != 'undefined') {
		GLOBAL.window = GLOBAL;
	}
	
	window.skeleton = skeleton;

	return window.skeleton;
});