// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop",
};

function generatePlaylist(guardians, songs) {
    const playlists = {};

    // Map through each guardian and their preferred genre
    Object.entries(guardians).forEach(([guardian, genre]) => {
        // Filter songs by the guardian's preferred genre
        const genreSongs = songs.filter(song => song.genre === genre);

        // Store the playlist for the guardian
        playlists[guardian] = genreSongs.map(song => `${song.artist} - ${song.title}`);
    });

    return playlists;
}

function displayPlaylists(playlists) {
    // Iterate through the playlists object
    Object.entries(playlists).forEach(([guardian, playlist]) => {
        // Create a new div element for each playlist
        const playlistElement = document.createElement('div');
        playlistElement.classList.add('playlist'); // Add 'playlist' class

        // Create a heading for playlist with guardian's name
        const heading = document.createElement("h1");
        heading.textContent = `${guardian}'s playlist`;
        playlistElement.appendChild(heading);

        // Create an unordered list that contains the songs
        const songList = document.createElement('ul');

        // Iterate through each song in playlist
        playlist.forEach(song => {
            // Split the song into artist and song title
            const [artist, title] = song.split(' - ');

            // Create a ul element for each song
            const songItem = document.createElement('ul');
            songItem.classList.add('song'); // Add 'song' class
            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title'); // Add 'song-title' class
            songTitle.textContent = title;
            const artistName = document.createElement('span');
            artistName.textContent = ` by ${artist}`;
            songItem.appendChild(songTitle);
            songItem.appendChild(artistName);
            songList.appendChild(songItem);
        });

        // Append the song list to the playlist div
        playlistElement.appendChild(songList);

        // Append the playlist div to the document body
        document.body.appendChild(playlistElement);
    });
}


// Generate playlists
const playlists = generatePlaylist(guardians, songs);

// Display playlists
displayPlaylists(playlists);