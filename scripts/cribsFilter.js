angular
	.module('ngCribs')
	.filter('cribsFilter', function(){

		return function(listings, rankInfo){

			var filtered=[]
			var min=rankInfo.min;
			var max=rankInfo.max;
			angular.forEach(listings, function(listing){
				if (listing.details.jeerank >=min && listing.details.jeerank<=max){

					filtered.push(listing);
				}
			});
			return filtered;
		}
	});