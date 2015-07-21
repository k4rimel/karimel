(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('blockToolbar', blockToolbar);

    function blockToolbar() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'src/views/partials/cv/block/block-toolbar.html',
        };
    };
})();