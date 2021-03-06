server_nova = "../Back_End"
server_local = "http://localhost/OlympiData/Back_End"
current_server = server_nova
post_update = current_server + "/run_db_update_script.php"

var app = angular.module('updateDb', []);

app.controller('updateDbController', function($scope, $http, $location) {

    $scope.isCurrentlyUpdating = false;
    $scope.doneUpdating = false;
    $scope.update = function() {
        console.log($scope.isCurrentlyUpdating)
        $scope.isCurrentlyUpdating = true;
        console.log($scope.isCurrentlyUpdating)
        var requestData = {"button":1};
        $http.post(post_update, requestData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform}).then(function(r) {
            console.log("Submit succeded");
            console.log(r.data);
            $scope.isCurrentlyUpdating = false;
            $scope.doneUpdating = true;
            $scope.returnedFromUpdate = r.data;
        });
    }

    var transform = function(data){
        return $.param(data);
    }
});

