(function() {
    'use strict';
    angular.module('app.dashboard')
        .factory('dataFactory', /* @ngInject */ function ($http, $log, Computer) {

            var urlBase = env.api.URL;
            var dataFactory = {};

            dataFactory.getComputers = function () {
                return $http.get(urlBase + 'computers').then(function (response) {
                    return Computer.build(response.data);
                }, function (response) {
                    return response.status;
                });
            };

            dataFactory.getComputersByPage = function (current, limit) {
                return $http.get(urlBase + 'computers' + '?current=' + current + '&limit=' + limit);
            };

            dataFactory.getCompanies = function () {
                return $http.get(urlBase + 'companies').then(function (response) {
                    return response.data;
                }, function (response) {
                    return response.status;
                });
            };

            dataFactory.insertComputer = function (computer) {
                debugger;
                return $http.post(urlBase + 'computers', computer);
            };

            /* this.getCustomer = function (id) {
             return $http.get(urlBase + '/' + id);
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
