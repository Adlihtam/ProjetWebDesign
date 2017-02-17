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


/*
var info = document.getElementById("info");
var show0 = info.getAttribute("data-defense");
var show1 = info.getAttribute("data-attack");
var show2 = info.getAttribute("data-power");
var show3 = info.getAttribute("data-difficulty");


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Name', 'Percentage'],
        ["Defense", info.setAttribute("data-defense", show0)],
        ["Attack", info.setAttribute("data-attack", show1)],
        ["Power", info.setAttribute("data-power", show2)],
        ["Difficulty", info.setAttribute("data-difficulty", show3)]
    ]);

    var options = {
        bars: 'horizontal', // Required for Material Bar Charts.
        axes: {
            x: {
                0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
        },
        bar: { groupWidth: "100%" },
        tooltip: {isHtml: true}
    };

    var chart = new google.charts.Bar(document.getElementById('info'));
    chart.draw(data, options);
};
*/
