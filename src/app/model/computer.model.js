(function() {
    'use strict';
    angular.module('app.dashboard')
        .factory('Computer', /* @ngInject */ function () {
            function Computer(name, introduced, discontinued, companyDTO) {
                this.name = name;
                if (introduced !== null) {
                    this.introduced = introduced;
                }
                if (discontinued !== null) {
                    this.discontinued = discontinued;
                }
                if (companyDTO !== null) {
                    this.companyDTO = companyDTO;
                }
            }
            var computersArray = [];
            Computer.build = function (computers) {
                computersArray = [];
                angular.forEach(computers, function (value) {
                    //$log.debug(key);
                    computersArray.push(new Computer(
                        value.name,
                        value.introduced,
                        value.discontinued,
                        value.companyDTO
                    ));
                });
                return computersArray;
            };
            return Computer;
        });
})();
