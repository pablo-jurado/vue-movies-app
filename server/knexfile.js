const convertToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const snakeToCamel = (str) =>
  str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );

const objToCamel = (row) => {
  let obj = {};
  const keys = Object.keys(row);

  keys.forEach((key) => {
    const value = row[key];
    const camelCaseKey = snakeToCamel(key);
    obj[camelCaseKey] = value;
  });
  return obj;
};

module.exports = {
  development: {
    client: "sqlite3",
    wrapIdentifier: (value, origImpl) => origImpl(convertToSnakeCase(value)),
    postProcessResponse: (result) => {
      if (Array.isArray(result)) {
        return result.map(objToCamel);
      } else {
        return objToCamel(result);
      }
    },
    connection: {
      filename: "./db/dev.sqlite3",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    pool: { min: 0, max: 1 },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
