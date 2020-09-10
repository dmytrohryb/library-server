const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    isbn: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "isbn",
      unique: "isbn_UNIQUE"
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
    tableName: "thebook",
    comment: "",
    indexes: [{
      name: "fk_thebook_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }]
  };
  const ThebookModel = sequelize.define("thebook_model", attributes, options);
  return ThebookModel;
};