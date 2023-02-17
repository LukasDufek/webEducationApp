const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const path = require('path');
const cors = require('cors');
const passport = require('passport');


const app = express();
//routes
const items = require('./routes/api/items.routes');
const tasks = require('./routes/api/tasks.routes');
const users = require('./routes/api/users.routes');
const path = require("path");


//define middlewares

//app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.use(cors());
app.use(passport.initialize());
require('./config/passport')(passport);



//Middlewares routes
app.use('/api/items', items);
app.use('/api/tasks', tasks);
app.use('/api/users', users);


//connect to database
mongoose
    .connect('mongodb+srv://lukas-dufek:frameworkvuejs@items.x2hdz8c.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

// Seting up the static directory
// to deploy
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
