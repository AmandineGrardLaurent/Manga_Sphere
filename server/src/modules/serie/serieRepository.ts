import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class SerieRepository {
  async create(serie: NewSerieType) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO serie (title, synopsis, author, picture) VALUES (?,?,?,?)",
      [serie.title, serie.synopsis, serie.author, serie.picture],
    );
    return [result];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM serie WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM serie");
    return rows;
  }

  async update(serie: SerieType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE serie SET title = ?, synopsis = ?, author = ?, picture = ? WHERE id = ?",
      [serie.title, serie.synopsis, serie.author, serie.picture, serie.id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM serie WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new SerieRepository();
