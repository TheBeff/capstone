const app = angular.module('app', ['ui.router','ui.codemirror']);

app.controller('MainCtrl', function($scope){

	$scope.submit = function(value){
		console.log(value);
	};

	$scope.testEditorOptions = {
		lineNumbers: true,
		mode: "javascript"
	};

	$scope.codeEditorOptions = {
		lineNumbers: true,
		mode: "javascript",
		readOnly: "nocursor"
	};

	$scope.code = "function foo(){\n  return 'bar';\n}"
	$scope.testCode = "var assert = require('assert');\n\ndescribe('foo', function(){\n  it ('should return bar', function(){\n    assert.deepEqual(foo(), 'bar');\n  });\n});";
});