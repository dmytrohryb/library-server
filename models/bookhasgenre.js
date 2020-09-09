const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "genre_id",
      references: {
        key: "id",
        model: "genre_model"
      }
    }
  };
  const options = {
    tableName: "bookhasgenre",
    comment: "",
    timestamps: false,
    indexes: [{
      name: "fk_bookhasgenre_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }, {
      name: "fk_bookhasgenre_genre1_idx",
      unique: false,
      type: "BTREE",
      fields: ["genre_id"]
    }]
  };
  const BookhasgenreModel = sequelize.define("bookhasgenre_model", attributes, options);
  return BookhasgenreModel;
};