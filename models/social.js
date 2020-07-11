//username and email

module.exports = function(sequelize, DataTypes) {
    var Social = sequelize.define("Social", {
      facebook: { type: Sequelize.BOOLEAN, defaultValue: 0},
      twitter: { type: Sequelize.BOOLEAN, defaultValue: 0},
      reddit: { type: Sequelize.BOOLEAN, defaultValue: 0},
      instagram: { type: Sequelize.BOOLEAN, defaultValue: 0},
      youtube: { type: Sequelize.BOOLEAN,defaultValue: 0}
    });
    return Social;
  };
  
  
  //need ids to link together since they'll tie back into the user login model
  //foreign keys

