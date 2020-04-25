const express = require('express');
let app = express();
const axios = require('axios');
const path = require('path');
// const getReposByUsername = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

const request = require('request');
// const config = require('../config.js');

let getReposByUsername = (USER) => {
  console.log("SUP MOTHA FUCKA");
  let options = {
    url: `https://api.github.com/users/${USER}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token c380743b60b278308e23ec1248741c5faefb440b`
    }
  };
  return new Promise(function(resolve, reject) {
    request(options, function (error, response, body) {

      if (error) {
        reject(error)
      }
      resolve(body);
    });

  });

};


app.post('/repos', async function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const data = req.body;

  const USER = data.owner;
  console.log("HOLA BITCHES", USER)
  const body = await getReposByUsername(USER);
  console.log("Pizzaz!", body);

  
  res.send(body);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

