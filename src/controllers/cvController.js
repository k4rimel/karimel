(function(){
	'use strict';

	angular
		.module('cvBuilder')
		.controller('CvController', CvController);

	function CvController(Cv, User) {
		var resume = this;
		resume.user = {};
		resume.data = {};

		resume.getData = function(userId) {
		  	Cv.get(userId).then(function(res) {
		  		var data = res.data;
				if (!utils.isEmpty(data)) {
					if(!data.hasOwnProperty('title')) {
						data["title"] = "Unnamed resume";
					}
			    	resume.data = data;
				};
		  	});
		}
		resume.getUser = function() {
			User.get().then(function(res) {
				var user = res.data;
				if (!utils.isEmpty(user)) {
			    	resume.user = user;
		  			resume.getData(resume.user.id);
				};
		  	});
		}
	  	resume.update = function(data, isTitle) {
	  		var options = '';
	  		if(isTitle) {
	  			options = 'title';
	  		}
	  		console.log(resume.data);
		   	var data = data;
	  		data.cvId = 0; 
		   	console.log(data);
		   	Cv.save(data, options).then(function(response) {
		   		console.log(response);
		   	});
		}
		resume.delete = function($event) {
			var data = $event.target.value;
		};
		resume.init = function() {
			console.log("init");
			resume.getUser();
			resume.getData();
		};
		resume.orderIncrement = function(blocks, block) {
			resume.getNextBlock(blocks, block);
		};
		resume.orderDecrement = function(blocks, block) {
			resume.getPreviousBlock(blocks, block);
		};
		resume.getPreviousBlock = function(blocks, block) {
			var sequence = block.sequence;
			var previousSequence = sequence - 1;
			for (var i = 0; i < blocks.length; i++) {
				if (blocks[i].hasOwnProperty('sequence')) {
					if(blocks[i].sequence == previousSequence) {
						blocks[i].sequence = sequence;
						block.sequence ++;
					} else {
						blocks[i].sequence = sequence;
						block.sequence ++;
					}
				}
			};
		};
		resume.getNextBlock = function(blocks, block) {
			var sequence = block.sequence;
			var nextSequence = sequence + 1;
			for (var i = 0; i < blocks.length; i++) {
				if (blocks[i].hasOwnProperty('sequence')) {
					if (blocks[i].sequence == nextSequence) {
						blocks[i].sequence = sequence;
						block.sequence 
					} else {
						blocks[i].sequence = sequence;
						block.sequence --;
					}
				}
			};
		};
	  	
	  	resume.init();
	}
})();