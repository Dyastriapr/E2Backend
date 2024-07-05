module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    use_env_variable:
      "mysql://ue7nauuuoyefckob:CtmFNaM6DPA0AcGZ6zFD@bfwyooz9tp4pksihicej-mysql.services.clever-cloud.com:3306/bfwyooz9tp4pksihicej",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
