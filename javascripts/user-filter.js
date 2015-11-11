define(
	["jquery", "script"],
	function($, script) {

	// FILTER THE ARTISTS 
	$("#artist-options").change(function(e) {
		var filteredArtist = $("#artist-options option:selected").text();
		console.log("selected artist", filteredArtist);
		$(".song-artist").each(function() {
			// console.log("THIS", $(this).text().length, filteredArtist.length);
			if ($(this).text() === filteredArtist) {
				$(this).parents(".song-container").show();
			} else {
				// console.log("hiding");
				$(this).parents(".song-container").hide();
			}
		});
	});

	// FILTER THE ALBUMS
	$("#album-options").change(function(e) {
		var filteredAlbum = $("#album-options option:selected").text();
		console.log("selected album", filteredAlbum);
		$(".song-container").show();
		$(".song-container").not(':contains("' + filteredAlbum + '")').hide();
	});

	// FILTER BUTTON CLICK FUNCTION
	$("#filter").click(function() {
		$(".song-container").show();
	});
});