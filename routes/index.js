const express = require('express')
const cors = require('cors')
const router = express.Router();

router.use(express.json())
router.use(cors())
router.use('/auth', require('./auth-routes'))
router.use('/', require('./protected-routes'))

module.exports = router;
