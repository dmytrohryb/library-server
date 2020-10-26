const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id",
      unique: "id_UNIQUE"
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "text"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "id",
        model: "user_model"
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "book_id",
      references: {
        key: "id",
        model: "book_model"
      }
    },
    news_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "news_id",
      references: {
        key: "id",
        model: "news_model"
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    }
  };
  const options = {
    tableName: "coment",
    comment: "",
    indexes: [{
      name: "fk_coment_user1_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "fk_coment_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }, {
      name: "fk_coment_news1_idx",
      unique: false,
      type: "BTREE",
      fields: ["news_id"]
    }]
  };
  const ComentModel = sequelize.define("coment_model", attributes, options);
  return ComentModel;
};