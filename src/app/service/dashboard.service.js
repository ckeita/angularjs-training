(function() {
    'use strict';
    angular.module('app.dashboard')
        .factory('dataFactory', /* @ngInject */ function ($http, $log) {

            var urlBase = env.api.URL;
            var dataFactory = {};

            dataFactory.getComputers = function () {
                return $http.get(urlBase).then((response) => {
                    return response.data;
                }, (response) => {
                    return response.status;
                });
            };

            dataFactory.getComputersByPage = function (current, limit) {
                return $http.get(urlBase + '?current=' + current + '&limit=' + limit).then((response) => {
                    $log.info(limit);
                    return response.data;
                }, (response) => {
                    return response.status;
                });
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