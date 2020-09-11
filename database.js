const Sequelize = require('sequelize')
const TokenGenerator = require('uuid-token-generator');
const tokGen = new TokenGenerator();
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
    let transaction;    

    try {
        transaction = await sequelize.transaction();

        let res = await user.create({
            login: login,
            password: password,
            email: email,
            createdAt: createdAt,
            phone: phone,
            age: age,
            role_id: role_id,
            gender_id: gender_id
        })

        await client.create({user_id: res.dataValues.id})

        await transaction.commit();
        return true

    } catch (err) {
        if (err) await transaction.rollback();
        return false
    }
}

const createSession = async (login, password) => {
    let transaction;

    try {
        transaction = await sequelize.transaction();
        let res = await user.findAll({
            where: {
                login: login,
                password: password
            }
        })
        await session.create({token: tokGen.generate(), user_id: res[0].dataValues.id})
        await transaction.commit()
        return res[0].dataValues
    }catch (err){
        console.log(err)
        if (err) await transaction.rollback();
        return false
    }
}

module.exports.createUser = createUser
module.exports.createSession = createSession