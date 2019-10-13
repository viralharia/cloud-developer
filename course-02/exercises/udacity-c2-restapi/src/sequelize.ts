import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';
import { environment } from './config/config';
import { Dialect } from 'sequelize/types';


let configurationObj;
let dbDialect:Dialect;
if(environment == "PROD"){
  configurationObj = config.postgresql.prod;
  dbDialect = 'postgres';
}else{
  configurationObj = config.postgresql.dev;
  dbDialect = "sqlite";
}

console.log(`db host - ${configurationObj.host}, username - ${configurationObj.username}, ${process.env.DEPLOYMENT_ENV}`);

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": configurationObj.username,
  "password": configurationObj.password,
  "database": configurationObj.database,
  "host":     configurationObj.host,
  "port": configurationObj.port,

  dialect: dbDialect,
  storage: ':memory:',
});

