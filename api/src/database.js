import config from "./config";

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: config.LOCAL_DB_HOST,
  database: config.LOCAL_DB_NAME,
  username: config.LOCAL_DB_USER,
  password: config.LOCAL_DB_PASSWORD,
  port: config.LOCAL_DB_PORT,
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
