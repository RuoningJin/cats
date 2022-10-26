// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    callback(data);
  });

};

const returnData = (data) => {
  console.log('return value:', data);
};
module.exports = breedDetailsFromFile;
breedDetailsFromFile('sdf', returnData(undefined));
// we try to get the return value