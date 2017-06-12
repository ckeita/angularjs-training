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

        vm.current = 1;
        vm.limit = 10;

        vm.computers = [];

        function update() {
            dataFactory.getComputersByPage(vm.current, vm.limit).then((response) => {
                vm.computers = response;
            }, (response) => {
                vm.computers = response;
            });
        }

        function $onInit() {
            $log.debug('HelloController init');
            update();
        }

        vm.setPage = function(new_page) {
            vm.current = new_page;
            update();
        };

        vm.setLimit = function(new_limit) {
            vm.limit = new_limit;
            update();
        };
    }
})();
