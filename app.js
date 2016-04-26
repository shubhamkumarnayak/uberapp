var app = angular.module('uber',[]);
app.requires.push('ngCordovaOauth');
var controller = app.controller('MainCtrl', function($scope, $http, $log, $cordovaOauth) {

 $cordovaOauth.uber("Tzen3DBSlfKBP3xLw9WBFSvj3WUrE37P",["products"]).then(function(result) {
    alert("Response Object -> " + JSON.stringify(result));
}, function(error) {
    alert("Error -> " + error);
});
 });
