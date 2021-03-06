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
    }
  };
  const options = {
    tableName: "client",
    comment: "",
    timestamps: false,
    indexes: [{
      name: "fk_client_user1_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }]
  };
  const ClientModel = sequelize.define("client_model", attributes, options);
  return ClientModel;
};
