const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const secret = `secret_key` || process.env.SECRET_KEY || "test";
const mongoose = require('mongoose');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require("cors");

// Route imports
const indexRouter = require('./routes/indexRouter')
const authRouter = require('./routes/authRouter')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_LINK, () => {
    console.log('Database connected')
})


app.use(cors({ origin: "http://localhost:5173", credentials: true}));
app.use(cookieParser());

// ROUTES
app.use('/api/v1', indexRouter)
app.use('/auth', authRouter)



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});