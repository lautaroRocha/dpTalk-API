require('dotenv').config()
require("./config/mongoose.config")
const express = require('express')
const app = express();
const port = process.env.PORT
const cors = require('cors')
const router = require("./routes/router")

app.use(express.json())  
app.use(express.urlencoded( {extended : true } ))
app.use(cors())

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
 );

app.use(router)

