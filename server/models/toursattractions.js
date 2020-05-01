module.exports = function (sequelize, DataTypes) {
  const TourAttraction = sequelize.define('TourAttraction',
    {
      stopIndex: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      admissionPrice: DataTypes.FLOAT,
      admissionNote: DataTypes.STRING,
    },
    {
      tableName: 'ToursAttractions',
      //
    });

  return TourAttraction;
};


/*
CREATE TABLE IF NOT EXISTS toursAttractions (
  id SERIAL PRIMARY KEY,
  tour_id INT FOREIGN KEY REFERENCES tours (id) ON DELETE CASCADE,
  attraction_id INT FOREIGN KEY REFERENCES attractions (id) ON DELETE CASCADE,
  stop_index INT,
  duration INT,
  admission_price FLOAT,
  admission_note STRING,
);
*/
