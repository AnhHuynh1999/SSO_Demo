import Sequelize from "sequelize";
import session from "express-session";
import passport from 'passport'

require('dotenv').config();

const configSession = (app) => {
  // initalize sequelize with session store
  const SequelizeStore = require("connect-session-sequelize")(session.Store);

  // create database, ensure 'sqlite3' in your package.json
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    define: {
      freezeTableName: true
    }
    ,timezone:"+07:00"
  })

  const myStore = new SequelizeStore({
    db: sequelize,
  });
  
  // configure express
  app.use(
    session({
      secret: process.env.JWT_SECRET,
      store: myStore,
      resave: false, // we support the touch method so per the express-session docs this should be set to false
      proxy: true, // if you do SSL outside of node.
      saveUninitialized: false,
      expiration: 30 * 1000, // thời gian hiện lực,
      cookie: {
        expires: 30 * 1000
      }
    })
  );
  // continue as normal

  myStore.sync()

  app.use(passport.authenticate('session'));
 //Sẽ lưu user vào bảng session (lưu với địn dạng format)
  passport.serializeUser(function(user, cb) {
    console.log('>> check before', user)
    process.nextTick(function() {
      cb(null, user);
    });
  });
  //Lấy thông tin người dùng đăng nhập
  passport.deserializeUser(function(user, cb) {
    console.log('>> check after', user)
    process.nextTick(function() {
      return cb(null, user);
    });
  });
};

export default configSession;
