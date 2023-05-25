const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./usersModule/routes/user.routes');
const PORT = process.env.PORT || 2023;
// Use the express.json middleware to parse incoming JSON data
app.use(express.json());

app.use(cors());

app.use(helmet());

app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});