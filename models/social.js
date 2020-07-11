//username and email

module.exports = function(sequelize, DataTypes) {
  const Social = sequelize.define("Social", {
    facebook: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    twitter: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    reddit: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    instagram: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    youtube: { type: DataTypes.BOOLEAN, defaultValue: 0 }
  });
  return Social;
};

//need ids to link together since they'll tie back into the user login model
//foreign keys
