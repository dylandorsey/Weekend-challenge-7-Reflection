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
router.delete('/:id', (req, res) => {
    const feedback_id = req.params;
    console.log(feedback_id);
    pool.query(`DELETE FROM "feedback"
                        WHERE "id" = ($1);`, [feedback_id])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problem with DELETE from database', error);
            res.sendStatus(500);
        });
});
// end DELETE route

// end DELETE feedback

module.exports = router;