'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {tableName: "castles", timestamps: false});
  Castle.associate = function(models) {
    Castle.belongsTo(models.Beach, {
      foreignKey: 'beachId'
    })
    // Castle.belongsTo(models.Tool, {
    //   foreignKey: 'tool_id'
    // });
    };
  return Castle;
};