(function(){
	'use strict';

	angular.module("cvBuilder", ["gettext"])
		.run(function (gettextCatalog) {
			gettextCatalog.currentLanguage = 'fr_FR';
			gettextCatalog.debug = true;
		});
	
})();