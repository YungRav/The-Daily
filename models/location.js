//location

module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    city: DataTypes.STRING,
    state: DataTypes.STRING
  });
  Location.associate = function(models) {
    Location.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Location;
};
