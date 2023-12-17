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
    const certification = req.body.certification;
    const frontend = req.body.frontend;
    const backend = req.body.backend;
    const language = req.body.language;
    const versioncontrol = req.body.versioncontrol;
    const deployment = req.body.deployment;
    const communication = req.body.communication;
    const platform = req.body.platform;

    if (key && keyCheck(key)) {
        db.query(
            `UPDATE about SET name = '${name}', birth = '${birth}', lastgraduate = '${lastgraduate}', isnew = ${isnew}, tel = '${tel}', email = '${email}', blog = '${blog}', github = '${github}', certification = '${certification}', frontend = '${frontend}', backend = '${backend}', language = '${language}', versioncontrol = '${versioncontrol}', deployment = '${deployment}', communication = '${communication}', platform = '${platform}' WHERE id = 1`,
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
