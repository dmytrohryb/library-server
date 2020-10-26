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
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "text"
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "id",
        model: "user_model"
      }
    },
    rental_order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "rental_order_id",
      references: {
        key: "id",
        model: "rental_order_model"
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "order_id",
      references: {
        key: "id",
        model: "order_model"
      }
    }
  };
  const options = {
    tableName: "notification",
    comment: "",
    indexes: [{
      name: "fk_notification_user1_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "fk_notification_order1_idx",
      unique: false,
      type: "BTREE",
      fields: ["rental_order_id"]
    }, {
      name: "fk_notification_order2_idx",
      unique: false,
      type: "BTREE",
      fields: ["order_id"]
    }]
  };
  const NotificationModel = sequelize.define("notification_model", attributes, options);
  return NotificationModel;
};