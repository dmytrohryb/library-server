const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "order_id",
      references: {
        key: "id",
        model: "order_model"
      }
    },
    book_instance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "book_instance_id",
      references: {
        key: "id",
        model: "book_instance_model"
      }
    }
  };
  const options = {
    tableName: "order_has_book_instance",
    comment: "",
    indexes: [{
      name: "fk_order_has_book_instance_book_instance1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_instance_id"]
    }, {
      name: "fk_order_has_book_instance_order1_idx",
      unique: false,
      type: "BTREE",
      fields: ["order_id"]
    }]
  };
  const OrderHasBookInstanceModel = sequelize.define("order_has_book_instance_model", attributes, options);
  return OrderHasBookInstanceModel;
};