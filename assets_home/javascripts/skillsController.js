(function() {

	//this returns the module so we can use it in the controller whereas in the app.js we had to create the module first with [].
	var app = angular.module('HomePageApp');

	app.controller('SkillsController', function(){
		this.skillGroups = [
			{title: 'Front End', items: ['HTML5','CSS3','Bootstrap']},
			{title: 'Back End', items: ['Node.js','Ruby','SQL']},
			{title: 'Workflow', items: ['Git','Github','Unix Terminal']},
			{title: 'Finance', items: ['Excel','Pivot Tables','VBA']}
		];

		var tab = 1;
			
		function setTab(newTab){
			//this.tab = newTab;
			console.log('hi');
		};
	});

	app.controller('TabController', function(){
		//default active tab
		this.tab = 1;

		//when skill tabs clicked active tab gets set
		function setTab(tabTitle) {
			console.log(tabTitle);
			this.tab = tabTitle;
			
		};


	});


})();