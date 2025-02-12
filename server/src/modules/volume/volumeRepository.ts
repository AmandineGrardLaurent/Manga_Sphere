import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class VolumeRepository {
  async create(season: NewVolumeType) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO volume (title, number, serie_id) 
      VALUES (?, ?, ?)`,
      [season.title, season.number, season.serie_id],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM volume");

    return rows as SeasonType[];
  }

  async readAllVolume(serieId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT volume.id, volume.title, volume.number, serie.id AS serie_id
      FROM volume 
      INNER JOIN serie ON serie.id = volume.serie_id
      WHERE serie.id = ?`,
      [serieId],
    );
    return rows;
  }

  async update(season: VolumeType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE volume SET title = ?, number = ?, serie_id = ? WHERE id = ?",
      [season.title, season.number, season.serie_id, season.id],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM volume WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}
export default new VolumeRepository();
