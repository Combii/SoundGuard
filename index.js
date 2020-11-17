const express = require('express');
const request = require('request');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');

//   request(
//     {
//       url:
//         'https://iotnet.cibicom.dk/1/nwk/app/BE7A133E/device/A8610A3130197313/last-data',
//       headers: {
//         Authorization:
//           'Bearer AAABXg7P_8gYHhwLavwtpHORwZAXcu_st5EI7bTcrpi9raggY',
//       },
//       rejectUnauthorized: false,
//     },
//     function (err, res) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(JSON.parse(res.body)[0].data);
//       }
//     }
//   );

var requestLoop = setInterval(function(){
  request({
      url: "https://iotnet.cibicom.dk/1/nwk/app/BE7A133E/device/A8610A3130197313/last-data",
      headers: {
        Authorization:
          'Bearer AAABXg7P_8gYHhwLavwtpHORwZAXcu_st5EI7bTcrpi9raggY',
      },
      method: "GET",
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10
  },function(error, response, body){
      if(!error && response.statusCode == 200){
          console.log(JSON.parse(response.body)[0].data);
      }else{
          console.log('error' + response.statusCode);
      }
  });
}, 1000);

});








app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
