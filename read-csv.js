const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

let rows = [];

fs.createReadStream(path.resolve(__dirname, 'confirmed_cases_au_by_location.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
        console.log(row)
        rows.push(row);
    })
    .on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`);
        console.log(rows[81484].postcode); // this data can be used to write to a db
    });
