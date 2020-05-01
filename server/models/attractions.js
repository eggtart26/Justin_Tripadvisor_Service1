module.exports = function (sequelize, DataTypes) {
  const Attraction = sequelize.define('Attraction',
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      // street_address: DataTypes.STRING,
      // city: DataTypes.STRING,
      // province: DataTypes.STRING,
      // postal: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
      attraction_url: DataTypes.STRING,
      image_path: DataTypes.STRING,
      image_filename: DataTypes.STRING,
      image_alt: DataTypes.STRING,
    },
    {
      tableName: 'Attractions',
      // indexes: [
      //   {
      //     unique: true,
      //     fields: ['street_address', 'city'],
      //   },
      // ],
      //
    });

  Attraction.associate = function (models) {
    models.Attraction.belongsToMany(models.Tour, { as: 'stops', foreignKey: 'attraction_id', through: 'ToursAttractions' });
  };

  return Attraction;
};
