const express = require('express');
const mongodb = require('mongodb');

const taskRouter = express.Router();

// Get Posts
taskRouter.get('/', async (req, res) => {
    const tasks = await loadPostsCollection();
    res.send(await tasks.find({}).toArray());
    //res.send('hello');
});

// Add Post
taskRouter.post('/', async (req, res) => {
    const tasks = await loadPostsCollection();
    await tasks.insertOne({
        text_of_task: req.body.text_of_task,
        for_year: req.body.for_year,
        result: req.body.result,
        student_result: req.body.student_result,
        reward: req.body.reward


    });
    res.status(201).send();
});


// Delete Post
taskRouter.delete('/:id', async (req, res) => {
    const tasks = await loadPostsCollection();
    await tasks.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
});


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        //heslo je: 'frameworkvuejs'
        'mongodb+srv://lukas-dufek:frameworkvuejs@slovniulohy.ofdkuu5.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true
        }
    );

    return client.db('slovniUlohy').collection('tasks');
}

module.exports = taskRouter;
