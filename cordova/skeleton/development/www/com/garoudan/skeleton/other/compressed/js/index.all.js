define("main",["require","exports"],function(e,n){"use strict";var i=function(n){var i=this;this.initialize=function(e){i.configureErrorHandling(),i.configureRequireJS(),i.requireVendors()},this.handleError=function(){console.error("Error!",arguments)},this.handleSucess=function(){console.log("Success!",arguments)},this.configureErrorHandling=function(){window.onerror=function(e,n,r){return i.handleError(e,n,r),!0}},this.configureRequireJS=function(){requirejs.config({baseUrl:"../",paths:{"vendor/requirejs/requirejs":"vendor/requirejs/requirejs/2.2.0/require.min","vendor/jboss/livereload":"vendor/jboss/livereload/2.0.8/livereload","vendor/jquery/jquery":"vendor/jquery/jquery/1.12.4/jquery-1.12.4.min"}})},this.requireVendors=function(){e(["vendor/jquery/jquery"])},i.initialize(n)},r=new i;return r}),define("skeleton",["require","exports","./main"],function(e,n,i){"use strict";var r=function(e){var n=this;this.controller={},this.model={},this.view={},this.initialize=function(e){n.controller.main=i},n.initialize(e)},o=new r;return"undefined"!=typeof window&&"undefined"==typeof GLOBAL&&(window.GLOBAL=window),"undefined"==typeof window&&"undefined"!=typeof GLOBAL&&(GLOBAL.window=GLOBAL),window.skeleton=o,window.skeleton}),require(["./skeleton"],function(){}),define("index",function(){});
//# sourceMappingURL=index.all.js.map