const app = angular.module('app', ['ui.router','ui.codemirror']);

app.controller('MainCtrl', function($scope, $http){

	$scope.submit = function(code, testCode){
		
		var newCode = "var mocha = require('mocha');\nvar expect = require('chai').expect;\n\n" + code + "\n\n" + testCode;
		console.log(newCode);
		
		return $http.post('/submit', {code: newCode})
			.then(function(response){
				console.log(response.data);
				var split = response.data.split('\n');
				$scope.response = split;
				//we should somehow put in some mocha reporting formating here
			});
	
	};

	$scope.testEditorOptions = {
		lineNumbers: true,
		mode: "javascript"
	};

	$scope.codeEditorOptions = {
		lineNumbers: true,
		mode: "javascript"
		// readOnly: "nocursor"
	};

	$scope.code = "function foo(){\n  return 'bar';\n}"
	$scope.testCode = "describe('foo', function(){\n  it ('should return bar', function(done){\n    expect(foo()).to.equal('bar');\n    done();\n  });\n});";
});