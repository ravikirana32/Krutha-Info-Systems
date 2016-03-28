newapp.controller('mainController', function($scope,$interval,$location,$window,$routeParams,$http,$rootScope) {
	console.log("mainController created");
	$scope.templates = [{
        name: 'views/header.html',
        url: 'views/header.html'}
        ];
    $scope.footer = [{
        name: 'views/footer.html',
        url: 'views/footer.html'}
        ];
    $scope.template = $scope.templates[0];
    $scope.template1 = $scope.footer[0];
    $scope.objective={
        name: 'views/objective.html',
        url: 'views/objective.html'};
    $scope.career={
        name: 'views/career.html',
        url: 'views/career.html'};
    $scope.education={
        name: 'views/education.html',
        url: 'views/education.html'};
    $scope.krutha={
        name: 'views/krutha.html',
        url: 'views/krutha.html'};
    $scope.contact={
        name: 'views/contact.html',
        url: 'views/contact.html'};
	$scope.currentpage="krutha";

	$scope.navigate=function(page){
		$scope.currentpage=page;
	}
});