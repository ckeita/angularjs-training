(function () {
    'use strict';
    angular.module('app.dashboard')
        .component('cdbAdd', {
            templateUrl: 'src/app/dashboard/addComputer.html',
            controller: AddController
        });

    /* @ngInject */
    function AddController($log, dataFactory) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        vm.companies = [];

        dataFactory.getCompanies().then((response) => {
            vm.companies = response;
        }, (response) => {
            $log.debug(response.status);
        });
    }
})();
