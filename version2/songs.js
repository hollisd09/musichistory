// // Use JavaScript arrays, loops, and innerHTML to show the music you love.

// // Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

// // Each student must add one song to the beginning and the end of the array.
// // Loop over the array and remove any words or characters that obviously don't belong.
// // Students must find and replace the > character in each item with a - character.
// // Must add each string to the DOM in index.html in the main content area.


var songsElement = document.getElementById("right-bar");
var output = "";
var string = ("songs");
var newCharacter = string.replace(/>/g, '-');



var songs = [];

songs[songs.length] = "Tear!drop > by Massive Attack on the album Mezzanine";
songs[songs.length] = "Cats and Dogs > by The Head a@nd The Heart on the album The Head and The Heart";
songs[songs.length] = "Leaf Off > by Jose Gonzalez on the album Vestiges an&d Claws";
songs[songs.length] = "Eyes Wide Ope(n > by Gotye on the album Making Mirrors";
songs[songs.length] = "Love Is a Losing Game > by Amy Winehouse o*n the album Back to Black";


songs.push("Need Your Love > by The Temper Trap on the album The Temper Trap");
songs.unshift("Windows Are Rolled Down > by Amos Lee on the album Mission Bell");

console.log(songs, "songs.length");

for (var i = 0; i < songs.length; i++) {
    var currentSong = songs[i];

    currentSong = currentSong.replace(/[^a-z A-Z 0-9 \>]+/g, "").replace(">", "-");
    console.log("currentSong", currentSong);

    output = output + "<div class='song-list-item'>" + currentSong + "</div>";
}

console.log("output", output);

songsElement.innerHTML = output;
