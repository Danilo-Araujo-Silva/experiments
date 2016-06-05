com.garoudan.core.model.exception.Handler = function Handler(options) {
	var self = this;
	
	function construct(options) {
	}
	
	this.handle = function () {
		console.error(arguments);
	}
	
	this.configureExceptionHandling = function () {
		window.onerror = function onError(message, url, line) {
	        self.handle(message, url, line);
	        
	        return true;
	    }
	}
	
	construct(options);
}