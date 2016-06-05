define(["require", "exports"], function (require, exports) {
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