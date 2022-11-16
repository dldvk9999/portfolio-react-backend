import mysql from "mysql";

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "whdrms6533@",
//     port: 3306,
//     database: "portfolio-backend",
// });

const connection = mysql.createConnection({
    host: "qvti2nukhfiig51b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "bat2jf9b6hiqo3jp",
    password: "uuj1u94v8yjys00k",
    port: 3306,
    database: "vgtusfzjs3r27hhl",
});

export default connection;
