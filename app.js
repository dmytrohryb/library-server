const createUser = require('./modules/database/createUser')
const createSession = require('./modules/database/createSession')
const closeSession = require('./modules/database/closeSession')
const identification = require('./modules/database/identification')
const cors = require('cors');
const body_parser = require('body-parser');
const express = require('express')
const { DateTime } = require("luxon");
const httpPort = 4000;
const socketPort = 8000;
const app = express();
const md5 = require('md5');
const io = require('socket.io')();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors());

const users = new Map()
let items = users.entries()

io.on('connection', (client) => {
    if(users.has(client.handshake.query.id)){
        users.delete(client.handshake.query.id)
    }

    users.set(client.handshake.query.id, client.id)

    client.on('logout', () => {
        users.delete(client.handshake.query.id)
    })

    client.on('disconnect', (reason) => {
        for(let user of users.entries()){
            if(client.id === user[1]){
                users.delete(user[0])
            }
        }
    })
})

io.listen(socketPort)
console.log('socket port ', socketPort)

app.listen(httpPort, () => {
    console.log('http port', httpPort)
})

app.post('/create-user', function(req, res){
  let dt = DateTime.local()
  createUser(req.body.login, req.body.password, req.body.email, dt.year + '.' + ((dt.month < 10) ? '0' + dt.month : dt.month) + '.' + ((dt.day.length === 1) ? '0' + dt.day : dt.day), req.body.phone, req.body.age, 2, req.body.gender)
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err)
  })
})

app.post('/create-session', function (req, res){
  createSession(req.body.login, req.body.password)
      .then(result => {
          res.send(result)
      })
      .catch(err => {
          res.send(false)
      })
})

app.post('/identification', function (req, res){
    console.log(req.body)
    identification(req.body.token)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(false)
            console.log(err)
        })
})

app.post('/close-session', function (req, res){
    closeSession(req.body.token)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(false)
            console.log(err)
        })
})
