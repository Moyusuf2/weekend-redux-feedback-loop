const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req,res)=>{
    let feedback = req.body;
    const sqlText = `
    INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")

    VALUES
        ($1, $2, $3, $4);

    `
    const sqlParams = [
        feedback.feeling,
        feedback.understanding, 
        feedback.support,
        feedback.comment]

    pool.query(sqlText,sqlParams)
        .then(dbRes => {
            console.log('', dbRes);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.error('POST error in serve', error);
            res.sendStatus(500);
        });
})

module.exports = router;
