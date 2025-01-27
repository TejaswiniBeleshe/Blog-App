const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.route.js')
const connectDB = require('./connectDB/connectDb.js')
const cookieParser = require('cookie-parser')
require('dotenv').config();
connectDB()
app.use(cors({credentials:true,
    origin:'http://localhost:5173'}));



app.use(bodyParser.json());
app.use(cookieParser())

app.use('/user',authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server has started with Port ${process.env.PORT}`)
})