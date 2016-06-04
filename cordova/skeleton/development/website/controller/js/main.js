define(["require", "exports"], function (require, exports) {
    "use strict";
    
    window.onerror = function onError(message, url, line) {
        console.error(message, "\n\nUrl:", url, "Line:", line);
        
        return true;
    }
    
    var environment = "dev";
    
    requirejs.config({
    	baseUrl: '../../',
        paths: {
        	"vendor/requirejs/requirejs": "vendor/requirejs/requirejs/2.2.0/require.min",
        	"vendor/jboss/livereload": "vendor/jboss/livereload/2.0.8/livereload",
            "vendor/jquery/jquery": "vendor/jquery/jquery/1.12.4/jquery-1.12.4.min"
        }
    });
    
    if (environment != "prd") {
    	require(["vendor/jboss/livereload"]);
    }
    
    require(["vendor/jquery/jquery"]);
});