"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Siswa.hasMany(models.Tabungan, { foreignKey: "id_siswa" });
      Siswa.hasMany(models.Nilai, { foreignKey: "id_siswa" });
    }
  }
  Siswa.init(
    {
      nama_siswa: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Siswa",
    }
  );
  return Siswa;
};
