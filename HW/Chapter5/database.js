const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "hw",
  password: "0000",
  database: "Chapter5",
});
const runQuery = async (pstmt, data) => {
  const conn = await pool.getConnection();
  try {
    const sql = conn.format(pstmt, data);
    const [result] = await conn.query(sql);
    return result;
  } finally {
    conn.release();
  }
};
module.exports = { runQuery };
