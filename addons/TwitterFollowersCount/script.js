// Wait for the page to load completely
window.addEventListener('load', () => {
  const username = "alexey_anshakov";
  let retryCount = 0;
  const maxRetries = 5;

  const fetchFollowerCount = () => {
    // Scrape the follower count
    const followerCountElement = document.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
    const followerCount = followerCountElement ? followerCountElement.textContent : null;

    if (followerCount) {
      // Log the follower count if available
      console.log(followerCount);
    } else {
      // Retry fetching after 1 second
      if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(fetchFollowerCount, 1000);
      } else {
        console.log('Unable to fetch follower count!');
      }
    }
  };

  fetchFollowerCount();
});
