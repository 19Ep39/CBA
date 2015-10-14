LoanApp.service('LoanTypeService', ['$http', 'loanApiConsUrl', '$localStorage', function ($http, loanApiConsUrl, $localStorage) {
    var URL = loanApiConsUrl;
    var token = $localStorage.get('access_token');

    //Function to GET All LoanTypes
    var getAll = function () {
        return $http({ method: 'GET', url: URL + "api/LoanType", headers: { 'Authorization': 'Bearer ' + token } });
    };
    //Function to Get LoanTypes By id
    var getById = function (userName) {
        return $http({ method: 'GET', url: URL + "api/LoanType?userName=" + userName, headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to create new LoanTypes
    var post = function (Customer) {
        return $http({ method: "post", url: URL + "api/LoanType", data: Customer, headers: { 'Authorization': 'Bearer ' + token } });
    };
    //Function  to Edit LoanTypes 
    var put = function (Customer) {
        return $http({ method: "put", url: URL + "api/LoanType", data: Customer, headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to Delete LoanTypes based upon id
    var Delete = function (id) {
        return $http({ method: "delete", url: URL + "api/LoanType", data: id, headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' } });
    };
    return {
        getLoanTypes: getAll,
        getLoanTypesById: getById,
        postLoanTypes: post,
        putLoanTypes: put,
        DeleteLoanTypes: Delete
    }
}]);