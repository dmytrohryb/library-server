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
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email",
      unique: "email_UNIQUE"
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
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    surname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "surname"
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone",
      unique: "phone_UNIQUE"
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "insert into genre (name) value ('adventure');\ninsert into publisher (name) value ('Publisher');\ninsert into gender (name) value ('Male');\ninsert into gender (name) value ('Female');\ninsert into user",
      field: "created_at"
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
