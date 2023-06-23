fetch('https://airtable.wr.io/')
  .then(response => response.json())
  .then(data => {
    // Process the data returned by the Cloudflare Worker
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
