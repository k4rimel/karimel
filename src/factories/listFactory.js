(function(){
	'use strict';

	angular
		.module('cvBuilder')
		.factory('list', ListFactory);

	function ListFactory($http) {
		return {
			'quizzes': [],
			'getQuizzes': function () {
				return $http.get('data/quizzes.json');
			}
		};
	}
})();