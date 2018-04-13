'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    name: DataTypes.STRING
  }, {tableName: 'tools', timestamps: false});
  Tool.associate = function(models) {
    Tool.hasMany(models.Castle, {
      foreignKey: 'toolId' //the same foreign key must be specified when you define the association on the lifeguard model.
    });
  }
  return Tool;
};