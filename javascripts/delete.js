define(
	["jquery", "script", "populate-songs"],
	function($, script, populateSongs) {
		$("body").on("click", ".delete-button", function(event) {
			var songKey = $(this).attr("id");
			console.log("https://dchmusic-history.firebaseio.com/songs/" + songKey + "/.json");
			console.log("things did things?");
			$.ajax({
				url: "https://dchmusic-history.firebaseio.com/songs/" + songKey + "/.json",
				method: "DELETE",
			}).done(function() {
				console.log("deleted");
			});
		})
	});

