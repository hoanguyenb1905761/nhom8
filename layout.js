app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl: "../home.html"
    })
    .when("/thanhvien",{
        templateUrl: "../thanhvien.html"
    })
    .when("/ytuong",{
        templateUrl: "../ytuong.html"
    })
    .when("/xuatnhap",{
        templateUrl: "../xuatnhap.html"
    })
    .when("/thongke",{
        templateUrl: "../thongke.html"
    })  
    .when("/lienhe",{
        templateUrl: "../lienhe.html"
    })  
    .otherwise({
        templateUrl: "../home.html"
    });
})