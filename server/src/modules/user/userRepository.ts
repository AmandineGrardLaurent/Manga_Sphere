import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type UserType = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
};

type NewUserType = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
};

class UserRepository {
  async create(user: NewUserType) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user(lastname, firstname, email, password) VALUES (?, ?, ?, ?)",
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
      "UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ? WHERE id = ?",
      [user.firstname, user.lastname, user.email, user.password, user.id],
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
}

export default new UserRepository();
