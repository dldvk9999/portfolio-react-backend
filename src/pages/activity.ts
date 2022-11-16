import express from "express";
import db from "../config/config";
import crypto from "crypto";
import keys from "../key/key";
const router = express.Router();

router.post("/", (req, res) => {
    const key = req.body.key;

    if (keyCheck(key)) {
        db.query("select * from activity", (err, row) => {
            if (err) res.status(500).send("about db error");
            else res.status(200).send({ length: row.length, data: row });
        });
    } else {
        res.status(500).send("key is not correct");
    }
});

router.post("/change", (req, res) => {
    const key = req.body.key;
    const id = req.body.id;
    const name = req.body.name;
    const start = req.body.start;
    const end = req.body.end;
    const introduce = req.body.introduce;
    const position = req.body.position;
    const takeaway = req.body.takeaway;
    const image = req.body.image;

    if (keyCheck(key)) {
        db.query(
            `UPDATE activity SET name = '${name}', start = '${start}', end = '${end}', introduce = '${introduce}', position = '${position}', takeaway = '${takeaway}', image = '${image}' WHERE id = ${id} and isbackup = 0`,
            (err, row) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("activity update db error");
                } else
                    res.status(200).send(
                        row.affectedRows
                            ? "update success"
                            : `no activity with id = ${id}`
                    );
            }
        );
    } else {
        res.status(500).send("key is not correct");
    }
});

router.delete("/:id", (req, res) => {
    const key = req.body.key;
    const id = req.params.id;

    if (keyCheck(key)) {
        db.query(
            `DELETE FROM activity WHERE id = ${id} and isbackup = 0`,
            (err, row) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("activity delete db error");
                } else {
                    res.status(200).send(
                        row.affectedRows
                            ? "delete success"
                            : `no activity with id = ${id}`
                    );
                }
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
