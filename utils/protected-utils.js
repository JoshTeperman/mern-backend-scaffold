const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
  verifiedObject = jwt.verify(token, process.env.JWT_SECRET)
  return verifiedObject
}

const authenticateRequest = (req, res, next) => {
  if ( req.path.match(/seed/) ) return next();
  const { token } = req.headers
  if (!token) {
    return res.json({
      error: {
        status: 403,
        message: 'Could not authenticate user. Login required.'
      }
    })
  }
  const authenticatedUser = verifyToken(token)
  if (!authenticatedUser) {
    return res.json({
      error: {
        status: 403,
        message: 'Could not authenticate user'
      }
    })
  }
  req.user = authenticatedUser
  next()
}

module.exports = {
  authenticateRequest,
  verifyToken
}
