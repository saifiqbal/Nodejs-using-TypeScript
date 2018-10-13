import { Worker } from "cluster";
const http=require('http');

const GitHub = require('@octokit/rest');

exports.getCountries = (req, res, next) => {
     http.get('http://api.geonames.org/countryInfo?username=saifiqbal10p&type=json', (resp) => {
   
      resp.setEncoding(); //Now the data is a string!
      var store = "";
      resp.on('data', function(d) {
          store += d;
      }); 
      resp.on('end', function() {
          res.render('countries/index',{
            data:JSON.parse(store)
          });
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  };