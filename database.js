const Sequelize = require('sequelize')
const TokenGenerator = require('uuid-token-generator');
const tokGen = new TokenGenerator();
const sequelize = new Sequelize("library", "root", "658932147", {
    dialect: "mysql",
    host: "localhost"
})

const author = require('./models/author')(sequelize)
const book = require('./models/book')(sequelize)
const author_has_genre = require('./models/author_has_genre')(sequelize)
const book_has_author = require('./models/book_has_author')(sequelize)
const book_has_genre = require('./models/book_has_genre')(sequelize)
const client = require('./models/client')(sequelize)
const coment = require('./models/coment')(sequelize)
const employee = require('./models/employee')(sequelize)
const favourites = require('./models/favourites')(sequelize)
const rating = require('./models/rating')(sequelize)
const news = require('./models/news')(sequelize)
const publisher = require('./models/publisher')
const notification = require('./models/notification')(sequelize)
const gender = require('./models/gender')(sequelize)
const genre = require('./models/genre')(sequelize)
const order = require('./models/order')(sequelize)
const role = require('./models/role')(sequelize)
const session = require('./models/session')(sequelize)
const status = require('./models/status')(sequelize)
const book_instance = require('./models/book_instance')(sequelize)
const user = require('./models/user')(sequelize)

const createUser = async (login, password, email, createdAt, phone, age, role_id, gender_id) => {
    let transaction;

    try {
        transaction = await sequelize.transaction();

        let res = await user.create({
            login: login,
            password: password,
            email: email,
            phone: phone,
            age: age,
            settings: JSON.stringify({lang: 'ru', theme: 'dark'}),
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
        let _token = tokGen.generate()
        await session.create({token: _token, user_id: res[0].dataValues.id})
        await transaction.commit()
        var tempData = {
            userData: res[0].dataValues,
            token: _token
        }
        return tempData
    }catch (err){
        console.log(err)
        if (err) await transaction.rollback();
        return false
    }
}

const identification = async (token) => {
    let res = await session.findAll({
        where: {
            token: token
        }
    })
    if(res[0].dataValues.user_id){
        let userData = user.findAll({
            where: {
                id: res[0].dataValues.user_id
            }
        })
        return userData
    }else{
        return false
    }

}

const closeSession = async (token) => {
    try{
        await session.destroy({where: {token: token}})
        return true
    }catch (e){
        return false
    }
}

module.exports.createUser = createUser
module.exports.createSession = createSession
module.exports.identification = identification
module.exports.closeSession = closeSession
