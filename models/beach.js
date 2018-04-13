'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {tableName: "beaches", timestamps: false});
  Beach.associate = function(models) {
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beachId' //the same foreign key must be specified when you define the association on the lifeguard model.
    })
    // Beach.belongsToMany(models.Lifeguard,{
    //   through: 'beach_guards'
    // });
  };
  return Beach;
};