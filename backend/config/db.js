import mysql from "mysql2";

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "social-media",
});

export default conn;
