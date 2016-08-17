define(['knockout'], function(ko) {
	function AppViewModel() {
		self = this;
		self.title = ko.observable("Drew's App");
		}
	return AppViewModel;
	});
