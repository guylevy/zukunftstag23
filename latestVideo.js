// Set your API key and playlist ID
const API_KEY = 'AIzaSyD04EEyK1-AbsU-kj7PeoK70uli7LPcTvg';
const playlistId = 'PLrtZlwJ3MGbAf0yP52zN7c4SqLWRUltqz';
var videolink;

// Make the API request
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}&maxResults=12&order=date`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    const filteredVideos = data.items.filter(item => item.snippet.title.includes('FC Zürich'));
      youtubeLink = `https://www.youtube.com/watch?v=${filteredVideos[0].snippet.resourceId.videoId}`;
      // Get the anchor element by its ID
    const link = document.getElementById('videoLink');

    // Set the href attribute to the video URL
    link.href = youtubeLink;

  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });
