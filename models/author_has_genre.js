const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "author_id",
      references: {
        key: "id",
        model: "author_model"
      }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "genre_id",
      references: {
        key: "id",
        model: "genre_model"
      }
    }
  };
  const options = {
    tableName: "author_has_genre",
    comment: "",
    indexes: [{
      name: "fk_author_has_genre_genre1_idx",
      unique: false,
      type: "BTREE",
      fields: ["genre_id"]
    }, {
      name: "fk_author_has_genre_author1_idx",
      unique: false,
      type: "BTREE",
      fields: ["author_id"]
    }]
  };
  const AuthorHasGenreModel = sequelize.define("author_has_genre_model", attributes, options);
  return AuthorHasGenreModel;
};