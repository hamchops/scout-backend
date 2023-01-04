'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Locations.belongsTo(models.Skateparks, {
        foreignKey: 'skateparks_id',
        as: 'location',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Locations.init({
    name: DataTypes.STRING,
    skateparks_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // field: 'skateparks_id',
      onDelete: 'CASCADE',
      references: {
        model: 'skateparks',
        key: 'id'
      }
    },
    geolocation: DataTypes.GEOGRAPHY
  }, {
    sequelize,
    modelName: 'Locations',
    tableName: 'locations'
  });
  return Locations;
};