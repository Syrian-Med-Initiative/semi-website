// export async function fetchYoutubeVideos() {
//     const apiKey = process.env.YOUTUBE_API_KEY;
//     const channelId = process.env.YOUTUBE_CHANNEL_ID;
//     const maxResults = 5;
  
//     // Step 1: Get latest video IDs from the channel
//     const searchRes = await fetch(
//       `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=id&order=date&maxResults=${maxResults}`,
//       {
//         cache: 'no-store',
//         next: { tags: ['youtube-videos'] },
//       }
//     );
  
//     if (!searchRes.ok) throw new Error('Failed to fetch video IDs');
//     const searchData = await searchRes.json();
  
//     const videoIds = searchData.items
//       .filter(item => item.id.kind === 'youtube#video')
//       .map(item => item.id.videoId)
//       .join(',');
  
//     // Step 2: Fetch full details including full description
//     const videoRes = await fetch(
//       `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet`
//     );
  
//     if (!videoRes.ok) throw new Error('Failed to fetch video details');
//     const videoData = await videoRes.json();
  
//     return videoData.items.map(item => ({
//       id: item.id,
//       title: item.snippet.title,
//       description: item.snippet.description, // full description here
//       thumbnail: item.snippet.thumbnails.high.url,
//         publishDate: item.snippet.publishedAt,
//     }));
//   }
  