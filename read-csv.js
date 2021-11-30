const fs = require('fs');
const path = require('path');
const { parse } = require('fast-csv');

let rows = [];

fs.createReadStream(path.resolve(__dirname, 'confirmed_cases_au_by_location.csv'))
  .pipe(parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => {
      console.log(row);
      //each row can be written to db
      rows.push(row);
  })
  .on('end', rowCount => {
      console.log(`Parsed ${rowCount} rows`);
      console.log(rows[81484].postcode); // this data can be used to write to a db in bulk
  });
