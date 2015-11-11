define(
	["jquery", "script", "populate-songs"],
	function($, script, populate) {
		$("#add").click(function() {
			console.log("SOMETHING HAPPENED");
			var newSong = {
				"title": $("#song-title").val(),
				"artist": $("#artist-name").val(),
				"album": $("#album-name").val()
				};
			console.log(newSong);	
			$.ajax({
				url: "https://dchmusic-history.firebaseio.com/.json",
				method: "POST",
				data: JSON.stringify(newSong)
			}).done(function(){
				populate.getJsonData(script.getData);
				$("#main-window").show();
				$("#song-title").val("");
				$("#artist-name").val("");
				$("#album-name").val("");
			});
		});
});