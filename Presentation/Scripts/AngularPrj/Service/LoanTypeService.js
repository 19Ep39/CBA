LoanApp.service('LoanTypeService', ['$http', 'loanApiConsUrl', '$localStorage', function ($http, loanApiConsUrl, $localStorage) {
    var URL = loanApiConsUrl;
    var token = $localStorage.get('access_token');

    //Function to GET All LoanTypes
    var getAll = function () {
        return $http({ method: 'GET', url: URL + "api/LoanType", headers: { 'Authorization': 'Bearer ' + token } });
    };   
    return {
        getLoanTypes: getAll
    }
}]);