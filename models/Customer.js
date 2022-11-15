const Customer = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'customer',
    {
      // user_id VARCHAR(10) NOT NULL PRIMARY KEY,
      user_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      // name VARCHAR(10) NOT NULL,
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // birthday DATE NOT NULL
      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'customer',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Customer;
