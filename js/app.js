var app = angular.module('store', [
    'ngRoute'
]);

app.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/welcome',
                {
                    templateUrl: 'partials/welcome.html',
                    controller: "searchPlayBan"
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
            .when('/maps/:msg',
                {
                    templateUrl: 'partials/maps.html',
                    controller: "searchMap"
                })
            .otherwise(
                {
                    redirectTo: '/welcome'
                })
    }
]);

app.controller('champController', [
    '$http',
    function ($http) {
        var store = this;
        console.log(store.products);
        $http.get('datas/champions.json').success(function (data) {
            store.products = data;
            console.log(data);
        });
    },
]);

app.controller('mapController', [
    '$http',
    function ($http) {
        var store = this;
        console.log(store.cartes);
        $http.get('datas/maps.json').success(function (data) {
            store.cartes = data;
            console.log(data);
        })
    }
]);

app.controller('playedbannedController', [
    '$http',
    function ($http) {
        var store = this;
        console.log(store.playBan);
        $http.get('datas/PlayedAndBanned.json').success(function (data) {
            store.playBan = data;
            console.log(data);
        })
    }
    ])

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
    },
]);

app.controller("searchMap", [
    '$routeParams', '$scope', '$http',
    function ($routeParams, $scope, $http) {
        $http.get('datas/maps.json').success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.name === $routeParams.msg) {
                    $scope.carte = value;
                }
            });
            $scope.cartes = data;
            console.log($scope.cartes);
            console.log($scope.carte);
        });
    }
]);

app.controller("searchPlayBan", [
    '$routeParams', '$scope', '$http',
    function ($routeParams, $scope, $http) {
        $http.get('datas/PlayedAndBanned.json').success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.name === $routeParams.msg) {
                    $scope.playBan = value;
                }
            });
            $scope.playBans = data;
            console.log($scope.playBans);
            console.log($scope.playBan);
        });
    }
]);


