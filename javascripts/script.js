define (
	["jquery", "hbs", "populate-songs", "get-more-songs"],
	function($, hbs, populate, getMore) {

		var mainWindow = $("#list-music");
		var artistSelect = $("#artist-options");
		var albumSelect = $("#album-options");

		var getSongInfo = function(songInfo) {
			require(['hbs!../templates/songs', 'hbs!../templates/artists-drop', 'hbs!../templates/albums-drop'],
				function(songTemplate, artistDropTemplate, albumDropTemplate) {
					mainWindow.html(songTemplate(songInfo));
					artistSelect.html(artistDropTemplate(songInfo));
					albumSelect.html(albumDropTemplate(songInfo));
				});
		};
				
		populate.getJsonData(getSongInfo);

	// CLICK FUNCTIONS TO SHOW AND HIDE PAGES
	$("#link-add").click(function() {
		$("#list-music").hide();
		$("#add-music").show();
		$("#profile").hide();
		console.log("add music working");
	});

	$("#link-list").click(function() {
		$("#list-music").show();
		$("#add-music").hide();
		$("#profile").hide();
		console.log("list music working");
	});

	$("#link-profile").click(function() {
		$("#list-music").hide();
		$("#add-music").hide();
		$("#profile").show();
		console.log("profile working");
	});

	// DELETE SONGS
	$(document).on("click", ".delete-button", function(e) {
		console.log("delete works", e);
		event.target.parentElement.remove()
	});

	// RETURN VARIABLES
	return {
		mainWindow: mainWindow,
		artistSelect: artistSelect,
		albumSelect: albumSelect,
		getSongInfo: getSongInfo
	};

});