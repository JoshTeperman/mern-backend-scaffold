const express = require('express')
const router = express.Router();

const { authenticateRequest } = require('../utils/protected-utils')

router.use(authenticateRequest)

module.exports = router;
