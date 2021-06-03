/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import Client from "../database";

// Type for category_letter datas
export type CategoryLetter = {
  id: number;
  letter: string;
  path: string;
};

export class CategoryLetterStore {
  async index():Promise<CategoryLetter[]>{
    try {
      const conn = await Client.connect()
      const sql = "SELECT * FROM category_letter";
      const result= await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Unable to fetch all category_letter items : ${error}`);
    }
  }

  async show(id:number):Promise<CategoryLetter>{
    try {
      const conn = await Client.connect()
      const sql = "SELECT * FROM category_letter WHERE id=($1)";
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to fetch this item : ${error}`)
    }
  }
}
