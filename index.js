const express = require('express')

// load the env 
const dotEnv = require('dotenv')
const router = require('./routes')
dotEnv.config()
// end

// const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000


app.use('/api/v1',router)

app.get('/',(req,res)=>{
    res.status(400).send({tets:'dasda'})
})


app.listen(PORT,console.log(`Server is running on ${process.env.ENV} mode at ${PORT}`))