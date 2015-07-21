(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('skillsBlock', skillsBlock);

    function skillsBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'src/views/partials/cv/block/skills-block.html',
        };
    };
})();