const express= require('express')
const router =express.Router()
router.get( "/", (req, res) => {
    res.send(`API is running on port`);
})
module.exports = router;