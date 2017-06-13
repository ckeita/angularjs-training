(function () {
    'use strict';
    angular.module('app.pagination')
        .component('cdbPagination', {
            templateUrl: 'src/app/pagination/pagination.html',
            controller: PaginationController,
            bindings: {
                current: '@',
                limit: '@',
                total: '@',
                events: '<'
            }
        });

    /* @ngInject */
    function PaginationController($scope, $log) {
        // jshint validthis: true
        const vm = this;

        $scope.Paginate = function (curpage, pagelimit, total) {
            vm.events.setPage.call(null, curpage);
            vm.events.setLimit.call(null, pagelimit);
            vm.events.setTotal.call(null, total);
            $log.info(total);
            $log.info(pagelimit);
        };
    }
})();
