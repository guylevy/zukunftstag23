// Use the Fetch API to fetch the webpage content
fetch('https://sfl.ch/de/cssl_ranking')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }
  })
  .then(html => {
    // Create a DOM parser to parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Locate the table element on the page (you may need to inspect the page's structure)
    const table = doc.querySelector('.osw-w-full osw-border-separate osw-border-spacing-y-2 osw-text-sm osw-font-light'); // Replace with the actual class or selector of the table

    if (table) {
      // Access and manipulate the table data as needed
      const rows = table.querySelectorAll('tr');
      rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        columns.forEach(column => {
          console.log(column.textContent);
        });
      });
    } else {
      console.log('Table not found on the page.');
    }
  })
  .catch(error => {
    console.error(error);
  });
