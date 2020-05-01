module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define('Location',
    // attributes
    {
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    // options
    {
      tableName: 'Locations',
    });

  // Locations.associate = function( models ){
  // }

  return Location;
};
