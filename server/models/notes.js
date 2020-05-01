module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define('Note',
    {
      description: DataTypes.STRING,
    },
    {
      tableName: 'Notes',
    });

  return Note;
};