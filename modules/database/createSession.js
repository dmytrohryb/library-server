const database = require('../database')
const TokenGenerator = require('uuid-token-generator');
const tokGen = new TokenGenerator();

module.exports = async function createSession (email, password) {
    let transaction;

    try {
        transaction = await database.Sequelize.transaction();
        let res = await database.User().findAll({
            where: {
                email: email,
                password: password
            }
        })
        let _token = tokGen.generate()
        await database.Session().create({token: _token, user_id: res[0].dataValues.id})
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
