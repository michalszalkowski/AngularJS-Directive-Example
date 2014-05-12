var app = angular.module('szalekApp', []);

app
    .controller("NameCtrl", function ($scope) {
        $scope.hello = "Welcome welcome!";

        $scope.michal = { name: 'Michał', lastname: 'Lorem', address: 'Poland' };
        $scope.ewa = { name: 'Ewa', lastname: 'Ipsum', address: 'Poland' };
        $scope.ala = { name: 'Alicja', lastname: 'Lorem', address: 'Poland' };
        $scope.kuba = { name: 'Jakub', lastname: 'Lorem', address: 'Poland' };
    })
    .directive('btbwPerson', function () {
        return {
            restrict: 'E',
            scope: {
                person: '=person'
            },
            templateUrl: 'tpl/person-row.tpl.html'
        };
    });
;
