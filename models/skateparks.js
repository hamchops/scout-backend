'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skateparks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Skateparks.hasMany(models.Locations, {
        foreignKey: 'skateparks_id',
        as: 'skatepark',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Skateparks.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SkateParks',
    tableName: 'skateparks'
  });
  return Skateparks;
};