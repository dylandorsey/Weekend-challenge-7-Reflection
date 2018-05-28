const express = require('express');
const router = express.Router();

// GET feedback
router.get('/', (req, res) => {
    console.log('POST /api/admin')
    .then((response) => {
        res.send(response);
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