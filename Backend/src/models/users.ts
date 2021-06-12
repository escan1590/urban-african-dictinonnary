/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Client from '../database';
// Type for users data
dotenv.config();
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS as string | number;
export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  // eslint-disable-next-line camelcase
  password_hash: string;
  // eslint-disable-next-line camelcase
  registered_at: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to fetch users : ${error}`);
    }
  }

  async show(username: string): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE username=($1)';
      const result = await conn.query(sql, [username]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to fetch user : ${error}`);
    }
  }

  async create(
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    registeredAt: string
  ): Promise<User> {
    try {
      const conn = await Client.connect();
      // const sqlCheck = 'SELECT username FROM users WHERE username=($1)';
      // const resultCheck = await conn.query(sqlCheck, [username]);
      // if (resultCheck.rows[0] === username)
      //   throw new Error('User Already exist');
      const sql =
        'INSERT INTO users (id,name, username, email, password_hash, registered_at) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
      const hash = await bcrypt.hash(password + pepper, Number(saltRounds));
      const result = await conn.query(sql, [
        id,
        name,
        username,
        email,
        hash,
        registeredAt,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to create user : ${error}`);
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    const conn = await Client.connect();
    const sql =
      'SELECT id, username, password_hash FROM users WHERE username=($1)';
    const result = await conn.query(sql, [username]);
    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(password + pepper, user.password_hash)) {
        return user;
      }
    }
    conn.release();
    return null;
  }

  async delete(username: string): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'DELETE FROM users WHERE username=($1) RETURNING *';
      const result = await conn.query(sql, [username]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (error) {
      throw new Error(`Unable to delete the user : ${error}`);
    }
  }
}
