angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"SKILLS":"SKILLS"});
    gettextCatalog.setStrings('fr_FR', {"SKILLS":"COMPETENCES"});
/* jshint +W100 */
}]);