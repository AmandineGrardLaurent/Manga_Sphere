import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class UserRepository {
  async create(user: NewUserType) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user(lastname, firstname, email, password, role_id) VALUES (?, ?, ?, ?, 2)",
      [user.lastname, user.firstname, user.email, user.password],
    );
    return [result];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");
    return rows;
  }

  async update(user: UserType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ?, role_id = ?WHERE id = ?",
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.role_id,
        user.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM user WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }

  async readAllWaitingUsers() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE role_id=2",
    );
    return rows;
  }

  async updateWaitingUser(userId: number) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET role_id=3 WHERE id = ?",
      [userId],
    );
    return result.affectedRows;
  }

  async readAllAcceptedUsers() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE role_id=3",
    );
    return rows;
  }

  // vérification de l'existence de l'email dans la BDD
  async checkUniqueEmail(userEmail: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email= ?",
      [userEmail],
    );
    return rows as UserType[];
  }

  async readByEmail(userEmail: string): Promise<UserType | null> {
    const [user] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email= ?",
      [userEmail],
    );

    const result = user as UserType[];
    return result.length > 0 ? result[0] : null;
  }

  async readByEmailForComment(
    email: string,
  ): Promise<{ user_id: number } | null> {
    const [user] = await databaseClient.query<Rows>(
      "SELECT id AS user_id FROM user WHERE email = ?",
      [email],
    );

    const result = user as { user_id: number }[];
    return result[0];
  }
}

export default new UserRepository();
