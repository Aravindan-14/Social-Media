import conn from "../config/db.js";
import sqlString from "sqlstring";

export class AuthController {
  static login(req, res) {
    let user = req.body;

    let query = sqlString.format("SELECT * FROM login WHERE username =?", [
      user.username,
    ]);

    conn.query(query, (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: "somting went worng",
        });
      }

      if (result.length == 0) {
        return res.json({
          success: false,
          message: "This user name is not found",
        });
      }

      if (result[0].password != user.password) {
        return res.json({
          success: false,
          message: "invalid password",
        });
      }

      return res.json({
        success: true,
        message: "Login successfully",
      });
    });
  }
  static signUp(req, res) {
    let user = req.body;

    let query = sqlString.format("SELECT * FROM login WHERE username =?", [
      user.username,
    ]);

    conn.query(query, (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: "somting went worng",
        });
      }
      if (result.length > 0) {
        return res.json({
          success: false,
          message: "This user name is already exist",
        });
      }

      let query = sqlString.format("INSERT INTO login SET ?", [user]);

      conn.query(query, (err, result) => {
        if (err) {
          return res.json({
            success: false,
            message: "somting went worng",
          });
        }
        return res.json({
          success: true,
          message: "Account created successfully",
        });
      });
    });
  }
}
