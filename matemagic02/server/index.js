const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const passport = require('passport');
const cookieParser = require('cookie-parser')
const { signinHandler, welcomeHandler, refreshHandler, logoutHandler } = require('./handlers');

const items = require('./routes/api/items.routes');
const tasks = require('./routes/api/tasks.routes');

const users = require('./routes/api/users.routes');

const port = process.env.PORT || 5000;

//connect to database
mongoose
    .connect('mongodb+srv://lukas-dufek:frameworkvuejs@items.x2hdz8c.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))


//define middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser())


app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/api/items', items);
app.use('/api/tasks', tasks);

app.use('/api/users', users);

app.post('/api/users/signin', signinHandler);
app.get('/api/users/welcome', welcomeHandler);
app.post('/api/users/refresh', refreshHandler);
app.get('/api/users/logout', logoutHandler);



app.listen(port, () => console.log(`Server started on port ${port}`));
