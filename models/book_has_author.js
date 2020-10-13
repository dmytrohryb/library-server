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
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "author_id",
      references: {
        key: "id",
        model: "author_model"
      }
    }
  };
  const options = {
    tableName: "book_has_author",
    comment: "",
    indexes: [{
      name: "fk_book_has_author_author1_idx",
      unique: false,
      type: "BTREE",
      fields: ["author_id"]
    }, {
      name: "fk_book_has_author_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }]
  };
  const BookHasAuthorModel = sequelize.define("book_has_author_model", attributes, options);
  return BookHasAuthorModel;
};