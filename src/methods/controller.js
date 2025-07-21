import * as popup from './popup.js';

export default [
	"$scope",
	"$element",
	function($scope, $element) {
		$scope.ExibirPopUp= function(layout) {
			popup.ExibirPopUp(layout);
		}

	}
]
