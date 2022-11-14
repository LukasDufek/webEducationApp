const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');


const items = require('./routes/api/items.routes');
const tasks = require('./routes/api/tasks.routes');

//const path = require('path');

const port = process.env.PORT || 5000;


app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// Middleware
app.use(bodyParser.urlencoded({
    extended:false
}));
//app.use('/images', express.static('images'));


//app.use('/api/posts', posts);
app.use('/api/items', items);
app.use('/api/tasks', tasks);


// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport)

const users = require('./routes/api/users.routes');
app.use('/api/users', users);

// 'mongodb+srv://lukas-dufek:frameworkvuejs@items.x2hdz8c.mongodb.net/?retryWrites=true&w=majority'
// 'mongodb+srv://lukas-dufek:frameworkvuejs@slovniulohy.ofdkuu5.mongodb.net/?retryWrites=true&w=majority'


app.listen(port, () => console.log(`Server started on port ${port}`));
