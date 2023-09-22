require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    port: process.env.DB_PORT,
    // query: {
    //   raw: true,// fix lỗi result.get is not a function
    // },
    define: {
      freezeTableName: true, //lấy tên chính xác không tự thêm s
    },
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: "123456",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "123456",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
