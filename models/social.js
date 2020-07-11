//username and email

module.exports = function(sequelize, DataTypes) {
    var Social = sequelize.define("Social", {
      media1: DataTypes.STRING,
      media2: DataTypes.STRING
    });
    return Social;
  };
  