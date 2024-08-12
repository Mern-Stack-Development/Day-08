const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/connect');

const postMessageAuthenticateRoute = require('./routes/postmessageauthenticate.route');
const getMessageAuthenticateRoute = require('./routes/getmessageauthenticate.route');
const getSpecificRoute = require('./routes/getmessagebyid.route');
const loginJWT = require('./routes/login.route.JWT');

const getUserMessageRoute = require('./routes/getmessagesofuser.route.js');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/post-message-authenticate',postMessageAuthenticateRoute);
app.use('/get-message-authenticate',getMessageAuthenticateRoute);
app.use('/get-specific-message',getSpecificRoute);
app.use('/loginJWT',loginJWT);

app.use('/user-message',getUserMessageRoute);
