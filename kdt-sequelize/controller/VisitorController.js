// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");
//하위 파일 지정 안해주면 자동으로 index파일로 지정이 된다
//중괄호를 쓰고 변수를 지정해주면, 그 변수 이름으로 된 데이터만 가져오겠다
//그냥 변수 쓰면 데이터 다 가져오겠다.

exports.get_visitors = (req, res) => {
  Visitor.findAll() // 얘는 promise임 select 문을 돌린다.
    .then(function (result) {
      //그래서 then을 쓸수가 있다.
      console.log("result : ", result);
      console.log("index");
      res.render("index", { data: result });
    });

  //SELECT * FROM visitor (원래 들어가 있던거)
  //   Visitor.get_visitors(function (result) {
  //     console.log("result : ", result);
  //     console.log("index");
  //     res.render("index", { data: result });
  //   });
};

exports.post_comment = (req, res) => {
  var data = {
    name: req.body.name,
    comment: req.body.comment,
  };
  Visitor.create(data).then(function (result) {
    console.log(result);
    res.send({ id: result.id });
  });
};

exports.get_visitor = (req, res) => {
  Visitor.findOne({
    //하나면 찾으면 one 여러개 찾으면 all (둘다 select)
    attributes: ["id", "name", "comment"],
    where: {
      id: req.body.id,
    }.then(function (result) {
      console.log("result:", result);
      res.send({ result: result });
    }),
  });
};

exports.patch_comment = (req, res) => {
  //update visitor set name=req.body.name, comment = req.body.coment where id = req.body.id;
  var data = {
    name: req.body.name,
    comment: req.body.comment,
  };
  Visitor.update(data, {
    where: { id: req.body.id },
  }).then(function (result) {
    console.log("result", result);
    res.send("수정 성공");
  });
};

exports.delete_comment = (req, res) => {
  Visitor.destroy({
    where: { id: req.body.id },
  }).then(function (result) {
    console.log(result);
    res.send("삭제 성공");
  });
};
