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
                    templateUrl: 'partials/item.html',
                    controller: "searchItem"
                })
            .when('/tournament',
                {
                    templateUrl: 'partials/tournament.html',
                    controller: "tournamentController"
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

//Permet de montrer l'onglet selectionné
app.controller('selectController', function () {
    var tab = 0;
    this.selectTab = function (tab_id) {
        tab = tab_id;
    };
    this.isSelected = function (tab_id) {
        return tab === tab_id;
    };
});

//Récupère toutes les données sur les champions
app.controller('champController', [
    '$http',
    function ($http) {
        var store = this;
        $http.get('datas/champions.json').success(function (data) {
            store.products = data;
        });
    }
]);

//Récupère toutes les données sur les map
app.controller('mapController', [
    '$http',
    function ($http) {
        var store = this;
        $http.get('datas/maps.json').success(function (data) {
            store.cartes = data;
        })
    }
]);

app.controller('itemController', [
    '$http',
    function ($http) {
        var store = this;
        console.log(store.objet);
        $http.get('datas/Items.json').success(function (data) {
            store.objet = data;
            console.log(data);
        })
    }
])

//Récupère toutes les données sur les tournois
app.controller("tournamentController",[
    '$http',
    function ($http) {
        var store = this;
        $http.get('').success(function (data) {
            store.tournament = data;
            console.log('hoi');
            console.log(data);
        })
    }
]);

//Récupère toutes les données sur les champions bannis
app.controller('playedbannedController', [
    '$http',
    function ($http) {
        var store = this;
        $http.get('datas/PlayedAndBanned.json').success(function (data) {
            store.playBan = data;
        })
    }
    ]);

//Récupère les données d'un champion en particulier
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
        });
    },
]);

//Récupère les données d'une map en particulier
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
        });
    }
]);

app.controller("searchItem", [
    '$routeParams', '$scope', '$http',
    function ($routeParams, $scope, $http) {
        $http.get('datas/Items.json').success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.name === $routeParams.msg) {
                    $scope.objet = value;
                }
            });
            $scope.objets = data;
            console.log($scope.objets);
            console.log($scope.objet);
        });
    }
]);


