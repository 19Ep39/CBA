///<reference path="../angular.min.js" />
///<reference path="../angular-route.min.js" />
var LoanApp = angular.module("LoanApp", ['ngRoute']);

LoanApp.constant("loanApiConsUrl", "http://localhost:51361/");

LoanApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/ContactUs', {
        templateUrl: 'Views/ContactUs.html',
        controller: ''
    });
    $routeProvider.when('/loanCalculator', {
        templateUrl: 'Views/LoanCalculator.html',
        controller: 'LoanCalculatorController'
    });
    $routeProvider.when('/Register', {
        templateUrl: 'Views/Register.html',
        controller: ''
    });
    $routeProvider.when('/FinacialService', {
        templateUrl: 'Views/FinacialService.html',
        controller: ''
    });
    $routeProvider.when('/TermOfUse', {
        templateUrl: 'Views/TermOfUse.html',
        controller: ''
    });
    $routeProvider.when('/PrivacyPolicy', {
        templateUrl: 'Views/PrivacyPolicy.html',
        controller: ''
    });
    $routeProvider.when('/RegisterSuccessful', {
        templateUrl: 'Views/RegisterSuccessful.html',
        controller: ''
    });  
    $routeProvider.when('/MyProfile', {
        templateUrl: 'Views/MyProfile.html',
        controller: ''
    });
    $routeProvider.when('/Index', {
        templateUrl: 'Index.html',
        controller: ''
    });
    $routeProvider.when('/AboutUs', {
        templateUrl: 'Views/AboutUs.html',
        controller: ''
    });
    $routeProvider.when('/Customers', {
        templateUrl: 'Views/Customers.html',
        controller: ''
    });
    $routeProvider.when('/LoanType', {
        templateUrl: 'Views/LoanType.html',
        controller: ''
    });
    //$routeProvider.otherwise({ redirectTo: '/Index' });
    //$locationProvider.html5Mode(true);
}]);



