const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// POST new feedback
router.post('/', (req, res) => {
    console.log('POST /api/submission')
    const newFeedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error with POST /api/submission', error);
            res.sendStatus(500);
        });
})

module.exports = router;