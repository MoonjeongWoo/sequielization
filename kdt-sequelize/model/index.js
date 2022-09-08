const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

// config = {
//   development: {
//     host: "localhost",
//     database: "kdt",
//     usernmae: "user",
//     password: "answjddn123!@#",
//     dialect: "mysql",
//     port: 3306,
//   },
// };
//가 담겨져 있다.

const sequelize = new Sequelize(
  /*데이버베이스,
    사용자명,
    비밀번호,
    데이터베이스 정보
    */
  config.database,
  config.username,
  config.password,
  config
);
const db = {};
//db내보내기

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Visitor = require("./Visitor")(sequelize, Sequelize);
//Visitor 함수 불러오기

module.exports = db;
