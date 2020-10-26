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
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    date_return: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_return"
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
    book_instance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "book_instance_id",
      references: {
        key: "id",
        model: "book_instance_model"
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
    tableName: "rental_order",
    comment: "",
    indexes: [{
      name: "fk_order_client1_idx",
      unique: false,
      type: "BTREE",
      fields: ["client_id"]
    }, {
      name: "fk_order_employee1_idx",
      unique: false,
      type: "BTREE",
      fields: ["employee_id"]
    }, {
      name: "fk_order_book_instance1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_instance_id"]
    }, {
      name: "fk_order_status1_idx",
      unique: false,
      type: "BTREE",
      fields: ["status_id"]
    }]
  };
  const RentalOrderModel = sequelize.define("rental_order_model", attributes, options);
  return RentalOrderModel;
};