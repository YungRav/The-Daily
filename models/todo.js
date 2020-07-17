module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  Todo.associate = function(models) {
    Todo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Todo;
};
