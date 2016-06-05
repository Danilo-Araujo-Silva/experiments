define('main',["require", "exports"], function (require, exports) {
    "use strict";
    
    var Main = function Main(options) {
		var self = this;
		
		this.initialize = function (options) {
			self.configureErrorHandling();
			self.configureRequireJS();
			self.requireVendors();
		}
		
		this.handleError = function () {
			console.error("Error!", arguments);
		}
		
		this.handleSucess = function () {
			console.log("Success!", arguments);
		}
		
		this.configureErrorHandling = function () {
			window.onerror = function onError(message, url, line) {
		        self.handleError(message, url, line);
		        
		        return true;
		    }
		}
		
		this.configureRequireJS = function () {
			requirejs.config({
		    	baseUrl: '../',
		        paths: {
		        	"vendor/requirejs/requirejs": "vendor/requirejs/requirejs/2.2.0/require.min",
		        	"vendor/jboss/livereload": "vendor/jboss/livereload/2.0.8/livereload",
		            "vendor/jquery/jquery": "vendor/jquery/jquery/1.12.4/jquery-1.12.4.min"
		        }
		    });
		}
		
		this.requireVendors = function () {
			require(["vendor/jquery/jquery"]);
		}

		self.initialize(options);
	}

	var main = new Main();
	return main;    
});
define('skeleton',['require', 'exports', './main'], function (require, exports, main) {
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
require(["./skeleton"], function success() {
	
});
define("index", function(){});


//# sourceMappingURL=index.all.js.map