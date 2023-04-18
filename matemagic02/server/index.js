const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');


const app = express();
//routes
const tasks = require('./routes/api/tasks.routes');
const users = require('./routes/api/users.routes');



//define middlewares

//app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.use(cors());

// Seting up the static directory
// to deploy
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize(undefined));
require('./config/passport')(passport);



//Middlewares routes
app.use('/api/tasks', tasks);
app.use('/api/users', users);


const db = require('./config/keys').mongoURI;
//connect to database
mongoose
    .connect(db, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log(`Database connected successfully`)
    }).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
