const express = require('express')
const app = express()

require('dotenv').config()

require('./src/config/global')()
require('./src/config/server')(app)