import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;
console.log(c.host)

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,
  "port": 8089,
  dialect: 'postgres',
  storage: ':memory:',
});

