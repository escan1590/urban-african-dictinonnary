/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import Client from '../database';

// Type for tag datas
export type Tag = {
  id: number;
  title: string;
  path: string;
};

export class TagStore {
  async index(): Promise<Tag[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM tag';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to fetch all tags : ${error}`);
    }
  }

  async show(id: number): Promise<Tag> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM tag WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to fetch this tag : ${error}`);
    }
  }

  async create(title: string, path: string): Promise<Tag> {
    try {
      const conn = await Client.connect();
      const sqlCheck = 'SELECT title FROM tag WHERE title = ($1)';
      const sql = 'INSERT INTO tag (title, path) VALUES($1,$2)';
      const resultCheck = await conn.query(sqlCheck, [title]);
      if (resultCheck.rows[0] === title) throw new Error(`Tag already exist`);
      const result = await conn.query(sql, [title, path]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to create the tag : ${error}`);
    }
  }
}
