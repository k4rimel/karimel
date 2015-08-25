(function(){
	'use strict';

	angular
		.module('cvBuilder')
		.factory('User', UserFactory);

	function UserFactory($http, $q) {
		var factory = {};

		factory.user = {};

		function makeRequest(url) {
      		var deferred = $q.defer();
      		$http.get(url).then(function(resp) {
  		  		deferred.resolve(resp.data);
      		});
      		return deferred.promise;
    	};
		factory.get = function(userId) {
			// if(!factory.user.hasOwnProperty(userId)) {
   //          	factory.user[userId] = makeRequest('/Users/getConnectedUser');
			// }
			factory.user = $http.get('../data/user.json');
			// return factory.user[userId];
			return factory.user;
		};

		return factory;
	}
})();