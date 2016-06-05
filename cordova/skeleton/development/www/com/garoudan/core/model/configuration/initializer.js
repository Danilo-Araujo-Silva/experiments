define(['require'], function (require) {
	"use strict";
	
	function initializer(options) {
		var self = this;
		
		function construct(options) {
			self.registerGlobals();
			self.registerModule();
			self.configureRequireJS();
			self.registerExceptionHandler();
		}
		
		this.registerGlobals = function () {
			if (typeof window != 'undefined' && typeof GLOBAL == 'undefined') {
				window.GLOBAL = window;
			}
			
			if (typeof window == 'undefined' && typeof GLOBAL != 'undefined') {
				GLOBAL.window = GLOBAL;
			}
		}
		
		this.registerModule = function () {
			window.com = {
				garoudan : {
					core : {
						controller : {},
						model : {
							configuration : {
								initializer : self
							},
							exception : {}
						}
					},
					skeleton : {
						controller : {},
						model : {}
					}
				}
			};
		}
		
		this.configureRequireJS = function () {
			requirejs.config({
				baseUrl: '../../../../',
				paths: {
					'core/vendor/requirejs/requirejs': 'core/vendor/requirejs/requirejs/2.2.0/require.min',
					'core/vendor/requirejs/promise': 'core/vendor/requirejs/promise/1.2.0/requirejs-promise',
					'core/vendor/jboss/livereload': 'core/vendor/jboss/livereload/2.0.8/livereload',
					'core/vendor/jquery/jquery': 'core/vendor/jquery/jquery/1.12.4/jquery-1.12.4.min'
				}
			});
		}
		
		this.registerExceptionHandler = function () {
			require(['core/model/exception/Handler'], function () {
				window.com.garoudan.core.model.exception.handler = new com.garoudan.core.model.exception.Handler();
				window.com.garoudan.core.model.exception.handler.configureExceptionHandling();
			});
		}
		
		this.importVendors = function () {
			require([
		         'core/vendor/jquery/jquery'
         	], function() {
				console.log(jQuery);
			});
		}
		
		construct(options);
	};
	
	new initializer();
});