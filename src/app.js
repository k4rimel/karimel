(function(){
	'use strict';

	angular.module("cvBuilder", ["gettext"])
		.run(function (gettextCatalog) {
			gettextCatalog.currentLanguage = 'en_US';
			gettextCatalog.debug = true;
		});
	
})();