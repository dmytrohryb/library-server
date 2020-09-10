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
      unique: "idstatus_UNIQUE"
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name",
      unique: "name_UNIQUE"
    }
  };
  const options = {
    tableName: "status",
    comment: "",
    indexes: []
  };
  const StatusModel = sequelize.define("status_model", attributes, options);
  return StatusModel;
};