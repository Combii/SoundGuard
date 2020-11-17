const express = require('express')
const request = require('request')

const app = express();
const port = 8000;

app.get('/', (req, res) => {

  request({
    url: 'https://iotnet.cibicom.dk/1/nwk/app/BE7A133E/device/A8610A3130197313/last-data',
    headers: {
       'Authorization': 'Bearer AAABXg7P_8gYHhwLavwtpHORwZAXcu_st5EI7bTcrpi9raggY'
    },
    rejectUnauthorized: false
  }, function(err, res) {
        if(err) {
          console.error(err);
        } else {
          console.log(res.body);
        }
  
  });


  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});