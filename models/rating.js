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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "value"
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "book_id",
      references: {
        key: "id",
        model: "book_model"
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
    coment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coment_id",
      references: {
        key: "id",
        model: "coment_model"
      }
    }
  };
  const options = {
    tableName: "rating",
    comment: "",
    indexes: [{
      name: "fk_rating_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }, {
      name: "fk_rating_client1_idx",
      unique: false,
      type: "BTREE",
      fields: ["client_id"]
    }, {
      name: "fk_rating_employee1_idx",
      unique: false,
      type: "BTREE",
      fields: ["employee_id"]
    }, {
      name: "fk_rating_coment1_idx",
      unique: false,
      type: "BTREE",
      fields: ["coment_id"]
    }]
  };
  const RatingModel = sequelize.define("rating_model", attributes, options);
  return RatingModel;
};