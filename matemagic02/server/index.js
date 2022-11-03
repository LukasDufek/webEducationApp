const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
//app.use('/images', express.static('images'));

app.use(cors());

//const posts = require('./routes/api/posts.router.js');
const items = require('./routes/api/items.routes');
const tasks = require('./routes/api/tasks.routes');

//app.use('/api/posts', posts);
app.use('/api/items', items);
app.use('/api/tasks', tasks);


//if(process.env.N === 'production'){
app.use(express.static(__dirname + '/public/'));

app.get(/.*/, (req, res)=> res.sendFile(__dirname + '/public/index.html'));
//}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
