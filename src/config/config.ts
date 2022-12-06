import mysql from "mysql";

// const connection = mysql.createConnection({
//     host: "qvti2nukhfiig51b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: "bat2jf9b6hiqo3jp",
//     password: "uuj1u94v8yjys00k",
//     port: 3306,
//     database: "vgtusfzjs3r27hhl",
// });

// const connection = mysql.createConnection({
//     host: "gateway01.us-west-2.prod.aws.tidbcloud.com",
//     user: "47bM2TMyXaSgn5X.root",
//     password: "",
//     port: 4000,
//     database: "test",
//     ssl: {
//         minVersion: "TLSv1.2",
//         rejectUnauthorized: true,
//     },
// });

const connection = mysql.createConnection({
    host: process.env.TIDB_HOST,
    user: process.env.TIDB_USER,
    password: process.env.TIDB_PASSWORD,
    port: Number(process.env.TIDB_PORT),
    database: "test",
    ssl: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: true,
    },
});

export default connection;
