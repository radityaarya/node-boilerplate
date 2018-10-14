const express = require('express')
const app = express()

require('dotenv').config()

require('./src/config/server')(app)