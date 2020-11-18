const express = require('express');
const request = require('request');

const app = express();
const port = 8000;

let sensorValue = 323534;


app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  
  res.send(sensorValue + "");  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
/*
  setInterval(function () {
    request(
      {
        url:
          'https://iotnet.cibicom.dk/1/nwk/app/BE7A133E/device/A8610A3130197313/last-data',
        headers: {
          Authorization:
            'Bearer AAABXg7P_8gYHhwLavwtpHORwZAXcu_st5EI7bTcrpi9raggY',
        },
        method: 'GET',
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10,
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          sensorValue = JSON.parse(response.body)[0].data;
        } else {
          console.log('error' + response.statusCode);
        }
      }
    );
  }, 1000);
*/
});
