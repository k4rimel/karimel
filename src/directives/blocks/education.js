(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('educationBlock', educationBlock);

    function educationBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'src/views/partials/cv/block/education-block.html',
        };
    };
})();