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
      type: DataTypes.STRING(45),
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
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "employee_id",
      references: {
        key: "id",
        model: "employee_model"
      }
    }
  };
  const options = {
    tableName: "news",
    comment: "",
    indexes: [{
      name: "fk_news_employee1_idx",
      unique: false,
      type: "BTREE",
      fields: ["employee_id"]
    }]
  };
  const NewsModel = sequelize.define("news_model", attributes, options);
  return NewsModel;
};