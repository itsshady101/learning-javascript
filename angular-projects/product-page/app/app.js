// Define main app module
// Everything getting undefined inside $http.get :(
angular.module('watchApp', [])
.controller('watchCont',['$scope', '$http', function($scope,$http){
    var watches = this;
    this.data = [];
    $http.get("app/data.json").then(function(response){
        this.data = response.data;
        this.name = "Hellp";
        this.content = response.data;
        $scope.hello = "HELLO";
        $scope.statustext = response.statustext;
    });
    console.log(this.content);
    console.log(watches.name);
    console.log($scope.hello);
    console.log('Is it working?');
}]);