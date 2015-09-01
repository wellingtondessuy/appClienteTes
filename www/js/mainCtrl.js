angular.module('appCliente', ['ionic']).controller('mainCtrl', function($scope, $http) {

    $scope.toggle = function() {
        alert('This is a click event');
    };

    

    $scope.login = function(dados) {
    	var req = {
			method: 'POST',
			url: 'https://treinamento.s2way.com/api/login_mobile.json',
			headers: {

			},
			data: {	"model":"ANDROID",
					"client":"1",
					"api_key":"6e72dad51bf33e433052cea1410073a5",
					"nsu":"4",
					"login": dados.username,
					"type":"ANDROID",
					"datetime":"20150901130646",
					"serial":"357430055286387",
					"password": dados.password,
					"version":"46" }
		}

    	$http(req).
			then(function(response) {
			    console.log("Sucesso: ", response);
			}, function(response) {
			    console.log("Erro: ", response);
			});
	};

});