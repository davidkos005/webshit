// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { request } = require('express');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/:date", function(req, res) {
  let input = req.params.date
  let passedInValiu
  if (parseInt(input) > 10000)
  passedInValiu = new Date(parseInt(input))

  else
  passedInValiu = new Date(input) 



  if (passedInValiu == 'Invalid Date')
    res.json({'error': 'Invalid Date'})
  else  
    res.json({
      unix: passedInValiu.getTime(),
      utc: passedInValiu.toUTCString()
    })
})
app.get("/api", function(req, res) {
  now = new Date(Date.now())

  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  })
})
