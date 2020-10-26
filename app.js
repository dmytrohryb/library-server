const createUser = require('./modules/database/createUser')
const createSession = require('./modules/database/createSession')
const closeSession = require('./modules/database/closeSession')
const identification = require('./modules/database/identification')
const findUser = require('./modules/database/findUser')
const cors = require('cors');
const body_parser = require('body-parser');
const express = require('express')
const { DateTime } = require("luxon");
const httpPort = 4000;
const socketPort = 8000;
const app = express();
const md5 = require('md5');
const io = require('socket.io')();
const confirmMail = require('./modules/mail').confirmEmail
const generateCode = require('./modules/mail').generateCode

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors());

app.listen(httpPort, () => {
    console.log('http port', httpPort)
})

const users = new Map()
let items = users.entries()

io.on('connection', (client) => {
    if(users.has(client.handshake.query.token)){
        users.delete(client.handshake.query.token)
    }

    users.set(client.handshake.query.token, client.id)

    client.on('logout', () => {
        console.log('logout')
        users.delete(client.handshake.query.token)
    })

    client.on('disconnect', (reason) => {
        for(let user of users.entries()){
            if(client.id === user[1]){
                users.delete(user[0])
            }
        }
    })

    console.log(users)
})


io.listen(socketPort)
console.log('socket port ', socketPort)

function storeConfirmation () {
    this.store = new Map()

    this.addStore = function (email, code) {
        this.store.set(email, code)
        setTimeout(() => this.removeStore(email), 60000)
    }

    this.removeStore = function (email) {
        if (this.store.has(email)) this.store.delete(email)
    }

    this.exists = function (email){
        return this.store.has(email)
    }
}

const store = new storeConfirmation()

app.post('/create-user', async function(req, res){
    if(await findUser.withEmail(req.body.email) === null){
        let code = generateCode(0, 9)
        confirmMail(req.body.email, code)
            .then(result => {
                store.addStore(req.body.email, code)
                res.send(true)
            })
            .catch(err => {
                console.log(err)
                res.send(false)
            })
    }else{
        res.send('email exists')
    }
})

app.post('/confirmation-email', (req, res) => {
    console.log(req.body)
    if(store.exists(req.body.email) && store.store.get(req.body.email) === req.body.code){
        let dt = DateTime.local()
        let createdAt = dt.toISODate() + ' ' + dt.hour + ':' + dt.minute + ':' + dt.day
        createUser(req.body.password, req.body.email, req.body.name, req.body.surname, req.body.role_id, createdAt)
            .then(result => {
                store.removeStore(req.body.email)
                res.send(result)
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }else {
        res.send('time is over')
    }
})

app.post('/create-session', function (req, res){
  createSession(req.body.email, req.body.password)
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







/*

const users = new Map()
let items = users.entries()

io.on('connection', (client) => {
    if(users.has(client.handshake.query.id)){
        users.delete(client.handshake.query.id)
    }

    users.set(client.handshake.query.id, client.id)

    client.on('logout', () => {
        console.log('logout')
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

 */
