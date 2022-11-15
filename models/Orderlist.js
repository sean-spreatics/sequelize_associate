const Orderlist = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'orderlist',
    {
      // id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // customer_id VARCHAR(10) NOT NULL,
      customer_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // product_name VARCHAR(20) NOT NULL,
      product_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // quantity INT,
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'orderlist',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Orderlist;
