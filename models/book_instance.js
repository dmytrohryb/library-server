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
    code_isbn: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "code_isbn",
      unique: "code_isbn_UNIQUE"
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
    in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "in_stock"
    }
  };
  const options = {
    tableName: "book_instance",
    comment: "",
    indexes: [{
      name: "fk_book_instance_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }]
  };
  const BookInstanceModel = sequelize.define("book_instance_model", attributes, options);
  return BookInstanceModel;
};