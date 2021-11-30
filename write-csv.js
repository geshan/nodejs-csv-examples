const fs = require('fs');
const { format } = require('@fast-csv/format');
const fileName = 'randoms.csv';
const csvFile = fs.createWriteStream(fileName);

let randoms = [];
const min = 1;
const max = 90000;
const noOfRows = 80000;
const stream = format({ headers:true });
stream.pipe(csvFile);

for(i=0; i<noOfRows; i++) {
  randoms.push({ 
    characters: Math.random().toString(36).substr(2, 7), 
    number: Math.floor(Math.random() * (max - min + 1) + min)
  });
  stream.write(randoms[i]);
}

console.log(randoms[79999].number);//with randoms array, all data could have been written at the end too
stream.end();
console.log(`${fileName} written with stream and ${noOfRows} rows`);
