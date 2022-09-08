const Sequelize = require("sequelize");
//sequelize 불러오기
const config = require("../config/config.json")["development"];
//config폴더에서 config.json파일 불러와서 development라는 애 들고오기
const db = {};
const sequelize = new Sequelize(
  config.database,
  //config의 database 가져온다
  config.username,
  //config의 username 가져온다
  config.password,
  //config의 password 가져온다
  config
  //config 전체를 가져온다.
);
db.sequelize = sequelize;
//db의 sequelize를 변수처리
db.Sequelize = Sequelize;
//db의 Sequelize 를 변수처리
db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
//db.User는 User 파일에 매개 변수 sequelize, Sequelize를 넘겨준다.

module.exports = db;
