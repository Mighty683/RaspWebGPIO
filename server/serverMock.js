const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var pinArray = [];
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/pin/set', function (req, res) {
  var pinData = req.body;
  pinArray[pinData.ID] = pinData;
  if (pinData.enabled) {
    if (!pinData.input) {
      console.log(pinData);
      res.send("Pin enabled and output set");
    }
  } else {
    console.log(pinData);
    res.send("Pin disabled");
  }
});

app.get('/pin/get', function (req, res) {
  var pinData = req.body;
  if (pinData.input) {
  res.send(pinData);
  console.log(pinData);
  }
});

app.get('/all/get', function (req, res) {
  if (pinArray.length == 0) {
    for (var i = 0; i<8 ; i++) {
      pinArray.push({
        ID: i,
        value: 0,
        enabled: false,
        input: true,
        frequency: 50
      });
    }
  }
  var response = JSON.stringify(pinArray);
   console.log(pinArray);
   res.send(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
