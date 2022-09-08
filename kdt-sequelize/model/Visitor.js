const Visitor = (Sequelize, DataTypes) => {
  //model/index.js 의 sequelize 객체
  //model/index.js에서 Sequelize 객체
  const model = Sequelize.define(
    "visitor",
    {
      id: {
        // id int not null primaryKey auto_increment
        type: DataTypes.INTEGER,
        //visitor에서 2번째 매개변수 데이터 정의
        //데이터 타입 정해주기
        allowNull: false,
        //눌값 넣기
        primaryKey: true,
        //기본키 설정
        autoIncrement: true,
        //자동으로 수가 올라가냐
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        //데이터 타입을 스트링(varchar)로 해주겠당
        allowNull: false,
        //눌값
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      freezeTableName: true,
      //자동으로 sql문 실행 시켜줄때 테이블 자제를 복수형태로 만들어준다
      //테이블 이름 고정으로 만들어준당
      timestamps: false,
      //타임스탬프가 찍힌다. 기본값  true,
      //뭔 소리나면, 등록된 시간, 수정된 시간이 자동으로 찍힌다.
    }
  );
  return model;
};
module.exports = Visitor;
