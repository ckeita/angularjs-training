(function () {
    'use strict';
    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($log, $translate, dataFactory, $state, Computer) {
        //jshint validthis: true
        const vm = this;
        vm.hello = 'Hello World!';
        vm.$onInit = $onInit;

        vm.current = 1;
        vm.limit = 10;

        vm.computers = [];
        vm.companies = [];

        function update() {
            dataFactory.getComputersByPage(vm.current - 1, vm.limit).then(function (response) {
                vm.computers = Computer.build(response.data.computers);
                vm.nbComputers = response.data.nbComputers;
                vm.nbLinks = response.data.nbLinks;
                vm.nbPages = response.data.nbPages;
                $log.info(vm.computers);
                $log.info(vm.nbComputers);
                $log.info(vm.nbLinks);
                $log.info(vm.nbPages);
            }, function (response) {
                return response.status;
            });
        }

        dataFactory.getCompanies().then(function (response) {
            vm.companies = response;
            $log.info(vm.companies);
        }, function (response) {
            $log.debug(response.status);
        });

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

        vm.setTotal = function(newTotal) {
            vm.total = newTotal;
            update();
        };

        vm.goToAdd = function() {
            $state.go('addComputer');
        };
    }
})();
