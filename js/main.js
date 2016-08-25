angular.module('MainApp',[])

.controller('mainController', ['$scope', function($scope) {
	$scope.expenses = [];
	$scope.formdata;
	$scope.submit = function() {
		$scope.expenses.push(angular.copy($scope.formdata));
	}

	$scope.$watch($scope.formdata, function() {
		console.log($scope.formdata);
	})
}]);
