// models/index.js
// sequelize-cli가 자동으로 생성해주는 코드!

'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체 선언시 매개변수로 다음 정보들을 받음: 데이터베이스명, 사용자, 비밀번호, 정보전체

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {"sequelize": sequelize, "Sequelize": Sequelize}

db.Customer = require('./Customer')(sequelize, Sequelize);
db.Orderlist = require('./Orderlist')(sequelize, Sequelize);
// db = {"sequelize": sequelize, "Sequelize": Sequelize, "Customer": XXX, "Orderlist": XXX }

// [Sequelize에서 foreign key 설정하는 방법]
// Customer : Orderlist = 1 : N 관계
// Orderlist table은 Customer의 pk인 user_id를 customer_id 이름으로 foreign key를 가짐
db.Customer.hasMany(db.Orderlist, {
  foreignKey: 'customer_id',
  allowNull: false,
  constraints: true,
  onDelete: 'cascade',
});
db.Orderlist.belongsTo(db.Customer, {
  foreignKey: 'customer_id',
});

module.exports = db;
