function UserProfile() {
	return {
		transclude: {
		name: 'h4',
		position: 'h6',
		description: 'p'
},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>',
				  '<label>Name</label>',
					'<span ng-transclude="name"><h4>Name: </h4> </span>',
					'<label>Position</label>',
					'<span ng-transclude="position"><h6>Position: </h6> </span>',
					'<label>Description</label>',
					'<span ng-transclude="description"><p> </p> </span>',
				'</div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
