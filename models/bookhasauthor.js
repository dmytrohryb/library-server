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
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
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
    tableName: "bookhasauthor",
    comment: "",
    timestamps: false,
    indexes: [{
      name: "fk_bookhasauthor_book2_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }, {
      name: "fk_bookhasauthor_author1_idx",
      unique: false,
      type: "BTREE",
      fields: ["author_id"]
    }]
  };
  const BookhasauthorModel = sequelize.define("bookhasauthor_model", attributes, options);
  return BookhasauthorModel;
};