const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
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
      primaryKey: true,
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
    tableName: "book_has_genre",
    comment: "",
    indexes: [{
      name: "fk_book_has_genre_genre1_idx",
      unique: false,
      type: "BTREE",
      fields: ["genre_id"]
    }, {
      name: "fk_book_has_genre_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }]
  };
  const BookHasGenreModel = sequelize.define("book_has_genre_model", attributes, options);
  return BookHasGenreModel;
};