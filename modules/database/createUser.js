const database = require('../database')

module.exports = async function createUser(password, email, name, surname, role_id, created_at) {
    let transaction;

    try {
        transaction = await database.Sequelize.transaction();

        let res = await database.User().create({
            password: password,
            email: email,
            settings: JSON.stringify({lang: 'ru', theme: 'dark'}),
            name: name,
            surname: surname,
            role_id: role_id,
            created_at: created_at
        }, {transaction: transaction})

        await database.Client().create({user_id: res.dataValues.id}, {transaction: transaction})

        await transaction.commit();
        return true

    } catch (err) {
        console.log(err)
        if (err) await transaction.rollback();
        return false
    }
}


