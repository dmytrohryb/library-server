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
      unique: "iduser_UNIQUE"
    },
    login: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "login",
      unique: "login_UNIQUE"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "password"
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone",
      unique: "phone_UNIQUE"
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "age"
    },
    settings: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "settings"
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "gender_id",
      references: {
        key: "id",
        model: "gender_model"
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "role_id",
      references: {
        key: "id",
        model: "role_model"
      }
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    timestamps: false,
    indexes: [{
      name: "fk_user_gender_idx",
      unique: false,
      type: "BTREE",
      fields: ["gender_id"]
    }, {
      name: "fk_user_role1_idx",
      unique: false,
      type: "BTREE",
      fields: ["role_id"]
    }]
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};
