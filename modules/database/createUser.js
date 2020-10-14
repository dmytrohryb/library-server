const database = require('../database')

module.exports = async function createUser(login, password, email, createdAt, phone, age, role_id, gender_id) {
    let transaction;

    try {
        transaction = await database.Sequelize.transaction();

        let res = await database.User().create({
            login: login,
            password: password,
            email: email,
            phone: phone,
            age: age,
            settings: JSON.stringify({lang: 'ru', theme: 'dark'}),
            role_id: role_id,
            gender_id: gender_id
        })

        await database.Client().create({user_id: res.dataValues.id})

        await transaction.commit();
        return true

    } catch (err) {
        if (err) await transaction.rollback();
        return false
    }
}


