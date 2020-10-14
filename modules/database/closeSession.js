const database = require('../database')

module.exports = async function closeSession (token){
    try{
        await database.Session().destroy({where: {token: token}})
        return true
    }catch (e){
        return false
    }
}
