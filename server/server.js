const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Route imports
const authRoutes = require('./routes/authRoutes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DB_LINK, () => {
    console.log('Database connected')
})

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true}));
app.use(cookieParser());
app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true
    })
  );

app.use('/authentication', authRoutes)

// const socketIO = require('socket.io')(http, {
//     cors: {
//         origin: "http://localhost:5173"
//     }
// });

// socketIO.on('connection', (socket) => {
//     console.log(`⚡: ${socket.id} user just connected!`);
//     socket.on('disconnect', () => {
//             socket.disconnect()
//       console.log('🔥: A user disconnected');
//     });
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});