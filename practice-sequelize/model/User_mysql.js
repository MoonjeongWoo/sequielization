const mysql = require("mysql");
//mysql 쓰는 중
const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "answjddn123!@#",
  database: "kdt_test",
});
// db랑 연결
exports.post_signup = (data, cb) => {
  let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};
// sql 인용문,
// cnn.query는 mysql 내장 함수임
// 에러 나면 에러 던지고, 콜백 함수 써서, row들을 보여주세요
exports.post_signin = (id, pw, cb) => {
  let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};
//select 문
//얘도 콜백 함수 쓴다.
exports.get_user = (id, cb) => {
  let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

exports.update_profile = (data, cb) => {
  let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};
//update문 data에서 name, pw, id 를 바꿔주세요
exports.delete_user = (id, cb) => {
  cnn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};
//얘는 id 를 바꿔주세요
