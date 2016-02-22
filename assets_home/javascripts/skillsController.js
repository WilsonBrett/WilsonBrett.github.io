(function() {

	//this returns the module so we can use it in the controller whereas in the app.js we had to create the module first with [].
	var app = angular.module('HomePageApp');

	app.controller('SkillsController', function(){
		this.skillGroups = [
			{title: 'Front End', items: ['HTML5','CSS3','Bootstrap','JS/jQuery/Ajax','Angular']},
			{title: 'Back End', items: ['Node.js/Express/Mongoose','Ruby/Rails/ActiveRecord','SQL/NoSQL']},
			{title: 'Workflow', items: ['Git/Github','Agile/Waterfall','Unix Terminal']},
			{title: 'Finance', items: ['Excel','Pivot Tables','VBA','Budgeting/Forecasting']}
		];

		this.tab = this.skillGroups[0].title;
			
		this.setTab = function(newTab){
			//console.log(this.tab);
			this.tab = newTab;
			//console.log(this.tab);
		};

		this.isSet = function(title){
			return this.tab === title;
		};
	});
})();