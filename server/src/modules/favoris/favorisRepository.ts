import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class FavorisRepository {
  async create(favoris: FavorisType) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO user_serie (user_id, serie_id)
          VALUES ( ?, ?)`,
      [favoris.user_id, favoris.serie_id],
    );
    return result.insertId;
  }

  async readAllFavoris(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT user_serie.serie_id, serie.*, user.id AS user_id
          FROM user_serie
          JOIN user ON user_serie.user_id = user.id
          JOIN serie ON user_serie.serie_id = serie.id
          WHERE user_id=?`,
      [userId],
    );
    return rows;
  }
}

export default new FavorisRepository();
