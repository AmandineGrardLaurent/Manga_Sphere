import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class SeasonRepository {
  async create(season: NewSeasonType) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO season (title, number, year, serie_id) 
      VALUES (?, ?, ?, ?)`,
      [season.title, season.number, season.year, season.serie_id],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM season");

    return rows as SeasonType[];
  }

  async readAllSeasons(serieId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT season.id, season.title, season.number, season.year, serie.id AS serie_id
      FROM season 
      INNER JOIN serie ON serie.id = season.serie_id
      WHERE serie.id = ?`,
      [serieId],
    );
    return rows;
  }

  async update(season: SeasonType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE season SET title = ?, number = ?, year = ?, serie_id = ? WHERE id = ?",
      [season.title, season.number, season.year, season.serie_id, season.id],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM season WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}
export default new SeasonRepository();
