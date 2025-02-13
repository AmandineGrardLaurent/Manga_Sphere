import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class CommentaryRepository {
  async create(commentary: CommentaryType) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO comment (comment, rating, user_id, serie_id) 
          VALUES (?, "2", 1, ?)`,
      [
        commentary.comment,
        // commentary.rating,
        // commentary.user_id,
        commentary.serie_id,
      ],
    );
    return result.insertId;
  }

  async readAllCommentary(serieId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT comment.comment, comment.rating, user.firstname, user.lastname, serie.id 
        FROM comment
        JOIN user ON comment.user_id = user.id
        JOIN serie ON comment.serie_id = serie.id
        WHERE serie_id=?`,
      [serieId],
    );
    return rows;
  }
}

export default new CommentaryRepository();
