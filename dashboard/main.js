fetch('https://airtable.wrio.workers.dev/')
  .then(response => response.json())
  .then(data => {
    // Process the data returned by the Cloudflare Worker
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
