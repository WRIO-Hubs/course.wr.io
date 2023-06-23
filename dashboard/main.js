const airtableBaseId = 'app166IA16JVxqLL4';
const airtableTable = 'Users';
const fieldName = 'Email';
const criteria = 'a.a@tutanota.com';

fetch(`https://airtable.wrio.workers.dev/?baseId=${airtableBaseId}&table=${airtableTable}&field=${fieldName}&criteria=${criteria}`)
  .then(response => response.json())
  .then(data => {
    // Process the filtered data returned by the Cloudflare Worker
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
