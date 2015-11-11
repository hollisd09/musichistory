define(["jquery"], function($) {
	return {
		getJsonData: function(getData) {
			$.ajax({url: "https://dchmusic-history.firebaseio.com/.json"})
				.done(getData); 
  	  	}
	};
});