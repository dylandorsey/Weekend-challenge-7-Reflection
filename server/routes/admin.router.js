const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// GET feedback
router.get('/', (req, res) => {
    console.log('GET /api/admin');
    const queryText = `SELECT "id", "feeling", "understanding", "support", "comments", "flagged", "date" FROM "feedback"
    ORDER BY "id" DESC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log('Error with GET /api/admin', error);
            res.sendStatus(500);
        });
})
// end GET feedback

// DELETE feedback

// end DELETE feedback

module.exports = router;