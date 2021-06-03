/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import Client from "../database";

// Type for catgory datas
export type Category = {
  id: number;
  title: string;
  path: string;
};

export class CategoryStore {
  async index():Promise<Category[]>{
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM category";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to fetch all the categories : ${error}`)
    }
  }

  async show(id:number):Promise<Category>{
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM category WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to fetch that category : ${error}`)
    }
  }
}
