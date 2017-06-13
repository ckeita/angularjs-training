(function () {
    'use strict';
    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($log, $translate, dataFactory, $state) {
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
                $log.debug(response.status);
            });
        }

        function $onInit() {
            update();
        }
        
        vm.changeLang = function (lang) {
            $translate.use(lang);
        };

        vm.setPage = function(newPage) {
            vm.current = newPage;
            update();
        };

        vm.setLimit = function(newLimit) {
            vm.limit = newLimit;
            update();
        };

        vm.goToAdd = function () {
            $state.go("addComputer");
        }
    }
})();
