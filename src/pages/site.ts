import express from "express";
import db from "../config/config";
import crypto from "crypto";
import keys from "../key/key";
const router = express.Router();

router.post("/", (req, res) => {
    const key = req.body.key;

    if (keyCheck(key)) {
        db.query("select * from githubapi limit 1", (err, row) => {
            if (err) res.status(500).send("site db error");
            else res.status(200).send({ length: row.length, data: row });
        });
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
