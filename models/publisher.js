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
    tableName: "publisher",
    comment: "",
    indexes: []
  };
  const PublisherModel = sequelize.define("publisher_model", attributes, options);
  return PublisherModel;
};