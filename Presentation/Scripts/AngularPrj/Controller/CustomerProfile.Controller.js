﻿///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
LoanApp.controller('CustomerProfileController',['$scope', '$location', 'CustomerProfileService', function ($scope, $location, CustomerProfileService) {

    $scope.init = function () {

        $scope.maritalstatus = CustomerProfileService.getMaritalStatus();
        $scope.sourceofincome = CustomerProfileService.getSourceOfIncome();
        //$scope.getAllCustomers();
        //$scope.getCustomer();
        //$scope.save();
        //$scope.update();
        //$scope.delete();
    }

    $scope.Customers = [
        { SI: '1', IsDeleted: 'False', FullName: 'R.R.V', Gender: 'F', BirthDate: '1/1/2001', MaritalStatus: 'S', Address: 'Cebu City', SourceOfIncome: 'Business/Charcoal', IsActive: 'true' },
        { SI: '2', IsDeleted: 'False', FullName: 'J.A.M', Gender: 'F', BirthDate: '1/1/2001', MaritalStatus: 'M', Address: 'Cebu City', SourceOfIncome: 'Business/Charcoal', IsActive: 'false' },
        { SI: '3', IsDeleted: 'False', FullName: 'C.E.U', Gender: 'M', BirthDate: '1/1/2001', MaritalStatus: 'S', Address: 'Cebu City', SourceOfIncome: 'Business/Charcoal', IsActive: 'true' }];
   
    $scope.search = function (txtSearch) 
    {
        return $filter($scope.Customers, txtSearch);

    }


    //Function to Load all Customer Records.   
    $scope.getAllCustomers = function () {
        var Customers = CustomerProfileService.getCustomers();

        Customers.then(function (results) {
            $scope.Customers = results.data;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }


    //Function to Load all Employees Records.   
    $scope.getCustomer = function () {

        var id = "13132";
        var CustomersById = CustomerProfileService.getCustomerById(id);

        CustomersById.then(function (results) {
            $scope.CustomerByUser = results.data;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }

    //Function to Save Record   
    $scope.save = function () {

        var customerdummy = {
            Id : 1,
            Email : "User@cba.com", 
            FirstName : "User First Name", 
            MiddleName : "U", 
            LastName : "User Last Name",            
            Gender : "M", 
            Address : "The World", 
            BirthDate : new Date(), 
            MaritalStatus : "M", 
            SourceOfIncome : "Employed",
            IsDeleted : false, 
            CreateDate : new Date(), 
            UpdateDate: new Date()
        };

        var CustomersToAdd = CustomerProfileService.postCustomer(customerdummy);

        CustomersToAdd.then(function (results) {
            $scope.addConfirmation = results;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }


    //Function to Save Record   
    $scope.update = function () {

        var customerdummy = {
            Id: 13132,
            Email: "User@cba.com",
            FirstName: "User First Name",
            MiddleName: "U",
            LastName: "User Last Name",
            Gender: "M",
            Address: "The World",
            BirthDate: new Date(),
            MaritalStatus: "M",
            SourceOfIncome: "Employed",
            IsDeleted: false,
            CreateDate: new Date(),
            UpdateDate: new Date()
        };

        var CustomersToUpdate= CustomerProfileService.putCustomer(customerdummy);

        CustomersToUpdate.then(function (results) {
            $scope.updateConfirmation = results;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }
  

    //Function to Load all Employees Records.   
    $scope.delete = function () {

        var id = "13132";
        var deleteCustomersById = CustomerProfileService.deleteCustomer(id);
        deleteCustomersById.then(function (results) {
            $scope.confirmationConfirmation = results;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
       
    }
                
    
}]);