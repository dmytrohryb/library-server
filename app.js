const Sequelize = require('sequelize')

const sequelize = new Sequelize("library", "root", "658932147", {
    dialect: "mysql",
    host: "localhost"
})

const author = require('./models/author')(sequelize)
const book = require('./models/book')(sequelize)
const bookhasauthor = require('./models/bookhasauthor')(sequelize)
const bookhasgenre = require('./models/bookhasgenre')(sequelize)
const client = require('./models/client')(sequelize)
const coment = require('./models/coment')(sequelize)
const employee = require('./models/employee')(sequelize)
const favorites = require('./models/favorites')(sequelize)
const gender = require('./models/gender')(sequelize)
const genre = require('./models/genre')(sequelize)
const order = require('./models/order')(sequelize)
const role = require('./models/role')(sequelize)
const session = require('./models/session')(sequelize)
const status = require('./models/status')(sequelize)
const thebook = require('./models/thebook')(sequelize)
const user = require('./models/user')(sequelize)

const createUser = async (login, password, email, createdAt, phone, age, role_id, gender_id) => {
    user.create({
        login: login,
        password: password,
        email: email,
        createdAt: createdAt,
        phone: phone,
        age: age,
        role_id: role_id,
        gender_id: gender_id
      }).then(res => {
        client.create({
          user_id: res.dataValues.id
        }).then(res => {
          return true
        }).catch(err => {
          return false
        })
      }).catch(err=>console.log(err));
}

const createSession = async (login, password) => {
  user.findAll({
    where: {
      login: login,
      password: password
    }
  }).then(res => {
    console.log(res[0].dataValues)
  }).catch(err => {
    console.log(err)
  })
}

createSession('test','test')

