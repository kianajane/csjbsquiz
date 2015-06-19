Template.quiz1.helpers({
	theProjects: function(){return Projects.find({}, {sort: {project: 1, first: 1, last: 1} });}
})

Template.quiz1.events({
	"submit #createproject": function(event){
		event.preventDefault();

		var project = event.target.project.value;
		var first = event.target.first.value;
		var last = event.target.last.value;
		var url = event.target.url.value;
		var git = event.target.git.value;

		Projects.insert({
			project:project, 
			first:first, 
			last:last,
			url:url, 
			git:git
		});
		
		event.target.project.value="";
		event.target.first.value="";
		event.target.last.value="";
		event.target.url.value="";
		event.target.git.value="";
	}
})

Template.projectRow.events({
	"click .jbsapp-delete-icon": function(){Projects.remove(this._id);}
})