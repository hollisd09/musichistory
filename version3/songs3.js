var songsElement = document.getElementById("right-bar-songs");
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

console.log(songs);

for (var i = 0; i < songs.length; i++) {
    var currentSong = songs[i];

    currentSong = currentSong.replace(/[^a-z A-Z 0-9 \>]+/g, "").replace(">", "-");
    console.log("currentSong", currentSong);

    output = output + "<div class='song-list-item'>" + currentSong + "</div>";
}

console.log("output", output);

songsElement.innerHTML = output;
