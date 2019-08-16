const request = require('request');
var options = {
    url: 'https://api.knack.com/v1/pages/scene_18/views/view_24/records',
    headers: {
        'X-Knack-Application-Id': '5d55bdf2446ab800106240b9',
        'X-Knack-REST-API-KEY': 'knack'
    }
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        // var info = JSON.parse(body);
        // console.log(info.records[0]['id'].toString());
        console.log(body);
      }
  }
request(options, callback);