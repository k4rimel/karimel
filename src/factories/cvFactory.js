(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .factory('Cv', CvFactory);

    function CvFactory($http, $q) {
        var factory = {};

        factory.cv = {};
        factory.response;

        function makeGetRequest(url) {
            var deferred = $q.defer();
            $http.get(url).then(function(resp) {
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        };

        function makePostRequest(url) {
            var deferred = $q.defer();
            $http.post(url).then(function(resp) {
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        };
        factory.buildBlockOject = function() {
            return {
                id: id,
                title: title,
                content: content,
                sequence: sequence,
                parent_id: id
            };
        }
        factory.save = function(data) {
            var postURL = "";
            var postdata = data;
            if (options === "title") {
                postURL = '/CvManager/updateBlock?cvId=' + postdata.cvId + '&data=' + postdata.data;
            } else {
                postURL = '/CvManager/updateBlock?cvId=' + postdata.cvId + '&data=' + postdata.data + '&type=' + option;
            }
            factory.response = makePostRequest();
            return factory.response;
        }
        factory.get = function(userId) {
            // factory.cv = makeGetRequest('/CvManager/getCv?userId=' + userId);
            // factory.cv = makeGetRequest('../data/resume.json');
            factory.cv = $http.get('../data/resume.json');
                   // .then(function(res){
                   //      factory.cv = res.data;                
                   //  });
            return factory.cv;
        };

        return factory;
    }
})();