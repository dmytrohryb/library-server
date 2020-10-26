const _sequelize = require('sequelize')

const seq = new _sequelize("library", "root", "658932147", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = (function database(){
    this.sequelize = seq

    this.author = require('../models/author')(this.sequelize)
    this.book = require('../models/book')(this.sequelize)
    this.author_has_genre = require('../models/author_has_genre')(this.sequelize)
    this.book_has_author = require('../models/book_has_author')(this.sequelize)
    this.book_has_genre = require('../models/book_has_genre')(this.sequelize)
    this.client = require('../models/client')(this.sequelize)
    this.coment = require('../models/coment')(this.sequelize)
    this.employee = require('../models/employee')(this.sequelize)
    this.favorites = require('../models/favorites')(this.sequelize)
    this.rating = require('../models/rating')(this.sequelize)
    this.news = require('../models/news')(this.sequelize)
    this.publisher = require('../models/publisher')
    this.notification = require('../models/notification')(this.sequelize)
    this.gender = require('../models/gender')(this.sequelize)
    this.genre = require('../models/genre')(this.sequelize)
    this.order = require('../models/order')(this.sequelize)
    this.role = require('../models/role')(this.sequelize)
    this.session = require('../models/session')(this.sequelize)
    this.status = require('../models/status')(this.sequelize)
    this.book_instance = require('../models/book_instance')(this.sequelize)
    this.user = require('../models/user')(this.sequelize)
    this.order_has_book_instance = require('../models/order_has_book_instance')(this.sequelize)
    this.subscription = require('../models/subscription')(this.sequelize)
    this.rental_order = require('../models/rental_order')(this.sequelize)


    this.Sequelize = function (){
        return this.sequelize
    }()

    this.User = function (){
        return this.user
    }

    this.Client = function (){
        return this.client
    }

    this.Session = function (){
        return this.session
    }

    return this

}(seq))


const dsa = () => {

}




