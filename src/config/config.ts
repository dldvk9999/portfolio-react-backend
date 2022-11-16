import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "whdrms6533@",
    port: 3306,
    database: "portfolio-backend",
});

export default connection;
