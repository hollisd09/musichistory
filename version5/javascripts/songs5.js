
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

var postedSong = $(".posted-song");

function postSong () {
	var postPart1 = "<div class='posted-song'>";
	var postContent = "<span>" + songTitleInput + "by " + artistNameInput + " on the album " + albumNameInput + "</span>";
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









// -----------------------------JS FOR SONG LIST-------------------------------------------

// var songsElement = document.getElementById("list-music");
// var output = "";
// var string = ("songs");

// $(document).ready(function() {


// var songs = [];


// songs[songs.length] = "Teardrop > by Massive Attack on the album Mezzanine";
// songs[songs.length] = "Cats and Dogs > by The Head and The Heart on the album The Head and The Heart";
// songs[songs.length] = "Leaf Off > by Jose Gonzalez on the album Vestiges and Claws";
// songs[songs.length] = "Eyes Wide Open > by Gotye on the album Making Mirrors";
// songs[songs.length] = "Love Is a Losing Game > by Amy Winehouse on the album Back to Black";


// songs.push("Need Your Love > by The Temper Trap on the album The Temper Trap");
// songs.unshift("Windows Are Rolled Down > by Amos Lee on the album Mission Bell");

// // console.log(songs);

// for (var i = 0; i < songs.length; i++) {
//     var currentSong = songs[i];
//     output = output + "<div class='song-list-item'>" + currentSong + "</div>";
// }

// // console.log("output", output);

// songsElement.innerHTML = output;













// var listLink = document.getElementById("link-list");
// var listView = document.getElementById("list-view");

// listLink.addEventListener("click", function() {
// 	listView.classList.add("hidden");
// 	addView.classList.add("hidden");

// 	listView.classList.add("visible");
// 	listView.classList.remove("hidden");
// });



// var addLink = document.getElementById("link-add");
// var addView = document.getElementById("add-view");

// addLink.addEventListener("click", function() {
// 	listView.classList.add("hidden");
// 	profileView.classList.add("hidden");

// 	addView.classList.add("visible");
// 	addView.classList.remove("hidden");
// });

// var profileLink = document.getElementById("link-profile");
// var profileView = document.getElementById("profile-view");

// profileLink.addEventListener("click", function() {
// 	listView.classList.add("hidden");
// 	addView.classList.add("hidden");

// 	profileView.classList.add("visible");
// 	profileView.classList.remove("hidden");
// });


// var toggleAddVew = document.querySelector('section#add-view');
// toggleAddVew.addEventListener("change", function (event) {
// 	document.getElementById("list-view")[0].classList.toggle;
// });




// var addSection = document.getElementById("add-music");

// var addMusic = document.querySelector('div#add-music');
// addMusic.addEventListener("toggle view", function AddMusic(event) {
// 	document.getElementById("list-music")[0].classList.toggle("add-music");
// });
// 	console.log("addMusic", addMusic);

