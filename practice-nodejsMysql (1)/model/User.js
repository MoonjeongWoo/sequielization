const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = User;
