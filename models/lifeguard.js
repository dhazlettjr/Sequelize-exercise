'use strict';
module.exports = (sequelize, DataTypes) => {
  let Lifeguard = sequelize.define('Lifeguard', {
    name: DataTypes.STRING
  }, {tableName: "lifeguards", timestamps: false});
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beachId' //the same foreign key must be specified when you define the association on the lifeguard model.
    })
    // Lifeguard.belongsToMany(models.Beach,{
    //   through: 'beach_guards'
    // })
    };
  return Lifeguard;
};