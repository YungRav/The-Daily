//location

module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    city: DataTypes.STRING,
    state: DataTypes.STRING
  });
  Location.belongsTo(User);
  return Location;
};
