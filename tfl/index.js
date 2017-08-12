let datafire = require('datafire');
let tfl_gov_uk = require('@datafire/tfl_gov_uk').actions;
 
let account = {
  apiKey: "4b9cf6ea343b37629649c8d7df2f2e3c",
  appId: "a199d638",
}
let context = new datafire.Context({
  accounts: {
    tfl_gov_uk: account,
  }
})
 
/*tfl_gov_uk.Line_Route({}, context).then(data => {
  console.log(data);
})*/

tfl_gov_uk.Line_StatusByMode({
  "modes": ['tube']
}, context).then(data => {
  console.log(data);
})

let bikepoint = tfl_gov_uk.BikePoint_Search({
  "query": "Thorndike Close"
}, context).then(data => {
  console.log(data);
})
tfl_gov_uk.BikePoint_Get({
  "id": 'BikePoints_651'
}, context).then(data => {
  console.log(data);
})
