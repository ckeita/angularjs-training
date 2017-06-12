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
    function PaginationController($log, $scope) {
        // jshint validthis: true
        const vm = this;
        vm.hello = 'Hello World!';

        $scope.Paginate = function (curpage, pagelimit, total) {
            vm.events.setPage.call(null, curpage);
            vm.events.setLimit(null, pagelimit);
        };
    }
})();