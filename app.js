const database = require('./database')
const cors = require('cors');
const body_parser = require('body-parser');
const TokenGenerator = require('uuid-token-generator');
const express = require('express')
const { DateTime } = require("luxon");
const port = 4000;
const tokGen = new TokenGenerator();
const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors());

app.listen(4000)

app.post('/create-user', function(req, res){
  let dt = DateTime.local()
  database.createUser(req.body.login, req.body.password, req.body.email, dt.year + '.' + ((dt.month < 10) ? '0' + dt.month : dt.month) + '.' + ((dt.day.length === 1) ? '0' + dt.day : dt.day), req.body.phone, req.body.age, 2, req.body.gender)
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err)
  })
})