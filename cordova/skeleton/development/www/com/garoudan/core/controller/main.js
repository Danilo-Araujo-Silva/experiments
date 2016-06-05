define(['require', '../model/configuration/initializer'], function (require) {
	"use strict";
	
	function main(options) {
		var self = this;
		
		function construct(options) {
			window.com.garoudan.core.controller.main = self;
			
			window.com.garoudan.core.model.configuration.initializer.importVendors();
		}
		
		construct(options);
	};
	
	new main();
});