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
    thebook_isbn: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "thebook_isbn",
      references: {
        key: "isbn",
        model: "thebook_model"
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
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
    createdAt: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    }
  };
  const options = {
    tableName: "order",
    comment: "",
    indexes: [{
      name: "fk_table1_thebook1_idx",
      unique: false,
      type: "BTREE",
      fields: ["thebook_isbn"]
    }, {
      name: "fk_order_employee1_idx",
      unique: false,
      type: "BTREE",
      fields: ["employee_id"]
    }, {
      name: "fk_order_client1_idx",
      unique: false,
      type: "BTREE",
      fields: ["client_id"]
    }, {
      name: "fk_order_status1_idx",
      unique: false,
      type: "BTREE",
      fields: ["status_id"]
    }]
  };
  const OrderModel = sequelize.define("order_model", attributes, options);
  return OrderModel;
};