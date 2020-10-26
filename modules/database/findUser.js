const database = require('../database')

async function findUserWithEmail(email) {
    const res = await database.User().findOne({ where: { email: email } })
    return res
}

module.exports.withEmail = findUserWithEmail
