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
            .when('/champ',
                {
                    templateUrl: 'partials/champion.html'
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