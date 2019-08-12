const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const PORT: process.env.PORT || 5000

mongoose.connect(process.env.DB_URL, { 
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}, err => {
  if (err) {
    console.log('👺  Error connecting to MongoDB');
  } else {
    console.log('✅  Connected to MongoDB');
  }
})

app.use(require('./routes'))

app.listen(config.PORT, () => console.log(`listening on PORT ${config.PORT}`))
