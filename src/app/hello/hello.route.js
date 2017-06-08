(function() {
    'use strict';
    angular
        .module('app.hello')
        .config(routesConfig);

    function routesConfig($stateProvider) {
        $stateProvider
            .state('hello', {
                url: '/hello',
                component: 'cdbHello'
                css:
            });
    }
})();
