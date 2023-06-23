const airtableBaseId = 'app166IA16JVxqLL4';
const airtableTable = 'Users';

fetch(`https://airtable.wrio.workers.dev/?baseId=${airtableBaseId}&table=${airtableTable}`)
  .then(response => response.json())
  .then(data => {
    // Process the data returned by the Cloudflare Worker
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
