const { User } = require("../model");
// model에서 User라는 데이터 사전 형 쓰겠다.
exports.index = (req, res) => {
  res.render("index");
};
// index 페이지 보여주세요
exports.signup = (req, res) => {
  res.render("signup");
};
// sign up 페이지 보여주세요
exports.post_signup = (req, res) => {
  var data = {
    id: req.body.id,
    name: req.body.name,
    pw: req.body.pw,
  };
  // post에서 받아온 데이터를 선언 해준다.
  User.create(data).then(() => {
    res.send(true);
  });
  //데이터를 insert해주는 거임
  // User.post_signup(req.body, function(result){
  //     res.send(true);
  // });
};

exports.signin = (req, res) => {
  res.render("signin");
};
//signin 보여주세요
exports.post_signin = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
    //id가 body 에서 id 인 데이터와, pw가 body 에서 pw인 애를 찾겠다.
  }).then((result) => {
    if (result) res.send(true);
    else res.send(false);
  });

  // User.post_signin(req.body.id, req.body.pw, function(result){
  //     if ( result.length > 0 ) res.send(true);
  //     else res.send(false);
  // });
};

exports.profile = (req, res) => {
  User.findOne({
    where: { id: req.body.id },
  }).then((result) => {
    if (result) res.render("profile", { data: result });
    else res.redirect("/user/signin");
  });

  // User.get_user(req.body.id, function(result){
  //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
  //     else res.redirect("/user/signin");
  // })
};

exports.profile_edit = (req, res) => {
  var data = {
    name: req.body.name,
    pw: req.body.pw,
  };
  User.update(data, {
    where: { id: req.body.id },
    //id가 body에서 id라는 데이터를 업데이트 해줍니다.
  }).then(() => {
    res.send("회원정보 수정 성공!");
  });

  // User.update_profile(req.body, function(result){
  //     res.send("회원정보 수정 성공!");
  // })
};

exports.profile_delete = (req, res) => {
  User.destroy({
    where: { id: req.body.id },
    //id 가 body에서 id라는 애를 찾아서 없애줍니다.
  }).then(() => {
    res.redirect("/user/signin");
  });

  // User.delete_user(req.body.id, function(result){
  //     res.redirect("/user/signin");
  // })
};
