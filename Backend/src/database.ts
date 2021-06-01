import { Pool } from "pg";
import dotenv from "dotenv";

//step 1: load .env datas
dotenv.config();
let Client: Pool;
const { ENV } = process.env;

//step 2: extract .env datas for db connection
const config = {
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  databaseTest: process.env.POSTGRES_DB_TEST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

//step 3: create the client depending on the environment
if (ENV === "dev") {
  Client = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
  });
} else {
  Client = new Pool({
    host: config.host,
    database: config.databaseTest,
    user: config.user,
    password: config.password,
  });
}

export default Client;
