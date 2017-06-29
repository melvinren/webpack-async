import './common.js';

function determineDate(){
	import('lodash').then(function(_){
		console.log(_);
	}).catch(function(err){
		console.log('Failed to load lodash', err);
	});
}

determineDate();

// var btn = document.getElementById("async");
// var addEvent = btn.addEventListener || btn.attachEvent;
// addEvent.apply(btn, ['click', function(){
// 	determineDate();
// }]);