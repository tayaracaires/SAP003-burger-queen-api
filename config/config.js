require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "database_development",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "database_test",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false,
    "dialectOptions": {
      "ssl":true
    }
  }
}
