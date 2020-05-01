module.exports = function (sequelize, DataTypes) {
  const Tour = sequelize.define('Tour',
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      overview: DataTypes.TEXT,
      cancellation_policy: DataTypes.TEXT,
      return_details: DataTypes.TEXT,
    },
    {
      tableName: 'Tours',
    });

  return Tour;
};
