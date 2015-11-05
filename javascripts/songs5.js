
// -----------------------------------JQUERY----------------------------------------------------
$(document).ready(function() {


$("#link-add").click(function() {
	$("#list-music").hide();
	$("#add-music").show();
	$("#profile").hide();
});

$("#link-list").click(function() {
	$("#list-music").show();
	$("#add-music").hide();
	$("#profile").hide();
})

$("#link-profile").click(function() {
	$("#list-music").hide();
	$("#add-music").hide();
	$("#profile").show();
})

// THESE ARE THE OPTIONS FOR THE PULL DOWN MENUS
var ChooseArtist = [
	{album: "Choose an Album", value: "Choose an Album"},
]

var MassiveAttack = [
	{album: "Mezzanine", value: "Mezzanine"},
];

var TheHeadandTheHeart = [
	{album: "The Head and The Heart", value: "The Head and The Heart"}
];

var JoseGonzalez = [
	{album: "Vestiges & Claws", value: "Vestiges & Claws"}
];

var Gotye = [
	{album: "Making Mirrors", value: "Making Mirrors"}
];

var AmyWinehouse = [
	{album: "Back to Black", value: "Back to Black"}
];

// FUNCTION FOR THE PULL DOWN MENUS
$("#artist-options").change(function() {
	var select = $("#artist-options option:selected").val();
	switch(select) {
		case "Massive Attack":
			$('#option').html(MassiveAttack[0].album);
		break;
		case "The Head and The Heart": 
			$('#option').html(TheHeadandTheHeart[0].album);
		break;
		case "Jose Gonzalez": 
			$('#option').html(JoseGonzalez[0].album);
		break;
		case "Gotye": 
			$('#option').html(Gotye[0].album);
		break;
		case "Amy Winehouse": 
			$('#option').html(AmyWinehouse[0].album);
		break;
		case "Choose an Artist":
			$('#option').html(ChooseArtist[0].album);
		break;
		default: 
		$("#artist-options").empty();
		$("#artist-options").append("<option>Choose an Artist</option>");
		break;
	}
});


var songTitleInput = $("#song-title");
var artistNameInput = $("#artist-name");
var albumNameInput = $("#album-name");
var addToList = $("#add-to-list");
var listMusic = $("#list-music");
// Put contentsOfTheFile into listOfSongs, and have it append that array each time a new song is added
var listOfSongs = [];
var postedSong = $(".posted-song");

function postSong () {
	var postPart1 = "<div class='posted-song'>";
	var postContent = "<span>" + songTitleInput.val() + " <i>by</i> " + artistNameInput.val() + " <i>on the album</i> " + albumNameInput.val() + "</span>";
	var editSong = "<button class='edit-song' type='button'>Edit</button>";
	var deleteSong = "<button class='delete-song' type='button'>Delete</button>";
	var postPart2 = "</div>";
	var output = (postPart1 + postContent + editSong + deleteSong + postPart2);

	listMusic.append(output);
	songTitleInput.val("");
	artistNameInput.val("");
	albumNameInput.val("");
}

$(document).on('click', '#add-to-list', function(event) {
		postSong();
	});

});

$.ajax({
    url: "data/songs.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log("the contents of songs.json");
    console.log(contentsOfTheFile);
  });




