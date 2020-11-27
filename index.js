const express = require('express')

// load the env 
const dotEnv = require('dotenv')
dotEnv.config()
// end

const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000


app.listen(PORT,console.log(`Server is running on ${process.env.ENV} mode at ${PORT}`))