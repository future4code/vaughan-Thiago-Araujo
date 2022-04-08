import knex from 'knex';

const connection = knex({
  client: "mysql",
  connection: {
    host: "35.226.146.116",
    port: 3306,
    user: "21713073-thiago-araujo",
    password: "zNgJ2w72SL9%6@!EsRNt",
    database: "vaughan-21713073-thiago-araujo",
    multiStatements: true
  }

})

export default connection