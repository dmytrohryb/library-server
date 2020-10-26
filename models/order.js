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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price"
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "client_id",
      references: {
        key: "id",
        model: "client_model"
      }
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "employee_id",
      references: {
        key: "id",
        model: "employee_model"
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status_id",
      references: {
        key: "id",
        model: "status_model"
      }
    }
  };
  const options = {
    tableName: "order",
    comment: "",
    indexes: [{
      name: "fk_order_client2_idx",
      unique: false,
      type: "BTREE",
      fields: ["client_id"]
    }, {
      name: "fk_order_employee2_idx",
      unique: false,
      type: "BTREE",
      fields: ["employee_id"]
    }, {
      name: "fk_order_status2_idx",
      unique: false,
      type: "BTREE",
      fields: ["status_id"]
    }]
  };
  const OrderModel = sequelize.define("order_model", attributes, options);
  return OrderModel;
};