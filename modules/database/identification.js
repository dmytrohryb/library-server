const database = require('../database')

module.exports = async function identification (token) {
    let res = await database.Session().findAll({
        where: {
            token: token
        }
    })
    if(res[0].dataValues.user_id){
        let userData = database.User().findAll({
            where: {
                id: res[0].dataValues.user_id
            }
        })
        return userData
    }else{
        return false
    }

}
