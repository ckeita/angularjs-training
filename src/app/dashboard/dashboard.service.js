(function() {
    'use strict';
    angular.module('app.dashboard')
        .factory('dataFactory', /* @ngInject */ function ($http) {

            var urlBase = 'http://localhost:8080/computer-database/api/computers';
            var dataFactory = {};

            dataFactory.getComputers = function () {
                return $http.get(urlBase);
            };

            /*this.getCustomer = function (id) {
                return $http.get(urlBase + '/' + id);
            };

            this.insertCustomer = function (cust) {
                return $http.post(urlBase, cust);
            };

            this.updateCustomer = function (cust) {
                return $http.put(urlBase + '/' + cust.ID, cust)
            };

            this.deleteCustomer = function (id) {
                return $http.delete(urlBase + '/' + id);
            };

            this.getOrders = function (id) {
                return $http.get(urlBase + '/' + id + '/orders');
            };*/
            return dataFactory;
        });
})();
