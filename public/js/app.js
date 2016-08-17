requirejs.config({
		baseUrl: 'js',
		map: {
			'*': {
			'knockout': '../components/knockout/dist/knockout'
			}
		}
	});

requirejs(['main', 'knockout'], 
	function(app, ko) {
		ko.applyBindings(app);
	});
