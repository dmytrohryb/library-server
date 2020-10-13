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
      unique: "idtable1_UNIQUE"
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
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "book_id",
      references: {
        key: "id",
        model: "book_model"
      }
    }
  };
  const options = {
    tableName: "favorites",
    comment: "",
    indexes: [{
      name: "fk_basket_user_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "fk_basket_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }]
  };
  const FavoritesModel = sequelize.define("favorites_model", attributes, options);
  return FavoritesModel;
};