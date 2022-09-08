module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING(20),
        //이놈은 데이터 타입이 string이다.
        allowNull: false,
        //null 값 넣을거냐 안넣을거냐 ,default값은 false임
        primaryKey: true,
        //기본키 default는 false
        autoIncrement: true,
        //자동으로 수가 올라가는지 안올라가는 지
      },
      name: {
        type: DataTypes.STRING(10),
        //얘도 데이텁 타입이 string인지
        allowNull: false,
        //null값 확인
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      //테이블 이름이 user
      freezeTableName: true,
      //테이블 이름을 고정시켜 주는 것
      timestamps: false,
      // 시간이 찍히냐 안찍히냐
    }
  );
};
