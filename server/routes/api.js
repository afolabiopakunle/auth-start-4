const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('APIs homepage')
})

module.exports = router;