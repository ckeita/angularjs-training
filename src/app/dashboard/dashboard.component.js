(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($log, dataFactory) {
        // jshint validthis: true
        const vm = this;
        vm.hello = 'Hello World!';
        vm.$onInit = $onInit;

        vm.computers = [];
        dataFactory.getComputers().then((response) => {
            vm.computers = response.data;
            console.log(vm.computers)
        }, (response) => {
            vm.computers = response.status;
            console.log(vm.computers)
        });

        function $onInit() {
            $log.debug('HelloController init');
        }
    }
})();
