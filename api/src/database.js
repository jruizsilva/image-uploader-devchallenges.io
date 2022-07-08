import config from "./config";

const { Sequelize } = require("sequelize");

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        host: config.DB_HOST,
        database: config.DB_NAME,
        username: config.DB_USER,
        password: config.DB_PASSWORD,
        dialect: "postgres",
        logging: false,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize({
        host: config.LOCAL_DB_HOST,
        database: config.LOCAL_DB_NAME,
        username: config.LOCAL_DB_USER,
        password: config.LOCAL_DB_PASSWORD,
        dialect: "postgres",
      });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default sequelize;
