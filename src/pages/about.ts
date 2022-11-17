import express from "express";
import db from "../config/config";
import crypto from "crypto";
import keys from "../key/key";
const router = express.Router();

router.post("/", (req, res) => {
    const key = req.body.key;

    if (key && keyCheck(key)) {
        db.query("select * from about limit 1", (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).send("about db error");
            } else res.status(200).send({ length: row.length, data: row });
        });
    } else {
        res.status(500).send("key is not correct");
    }
});

router.post("/change", (req, res) => {
    const key = req.body.key;
    const name = req.body.name;
    const birth = req.body.birth;
    const lastgraduate = req.body.lastgraduate;
    const isnew = req.body.isnew;
    const tel = req.body.tel;
    const email = req.body.email;
    const blog = req.body.blog;
    const github = req.body.github;

    if (key && keyCheck(key)) {
        db.query(
            `UPDATE about SET name = '${name}', birth = '${birth}', lastgraduate = '${lastgraduate}', isnew = ${isnew}, tel = '${tel}', email = '${email}', blog = '${blog}', github = '${github}' WHERE id = 1`,
            (err, _) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("about update db error");
                } else res.status(200).send("update success");
            }
        );
    } else {
        res.status(500).send("key is not correct");
    }
});

export default router;

function keyCheck(key: string) {
    return (
        crypto.createHmac("sha256", keys.salt).update(key).digest("hex") ===
        keys.masterKey
    );
}
