var app = angular.module('store', [
    'ngRoute'
]);

app.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/welcome',
                {
                    templateUrl: 'partials/welcome.html'
                })
            .when('/champ/:msg',
                {
                    templateUrl: 'partials/champion.html',
                    controller: "searchChamp"
                })
            .when('/item',
                {
                    templateUrl: 'partials/item.html'
                })
            .when('/tournament',
                {
                    templateUrl: 'partials/tournament.html'
                })
            .otherwise(
                {
                    redirectTo: '/welcome'
                })
    }
]);

app.controller('storeController', [
    '$http',
    function ($http) {
        var store = this;
        console.log(store.products);
        $http.get('datas/champions.json').success(function (data) {
            store.products = data;
            console.log(data);
        });
    }
]);

app.controller("searchChamp", [
    '$routeParams', '$scope', '$http',
    function ($routeParams, $scope, $http) {
        $http.get('datas/champions.json').success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.name === $routeParams.msg) {
                    $scope.champ = value;
                }
            });
            $scope.champions = data;
            console.log($scope.champions);
            console.log($scope.champ);
        });
    }
]);
