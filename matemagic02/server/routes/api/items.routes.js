const express = require('express');
const mongodb = require('mongodb');

const itemRouter = express.Router();

// Get Posts
itemRouter.get('/', async (req, res) => {
    const items = await loadPostsCollection();
    res.send(await items.find({}).toArray());
    //res.send('hello');
});

// Add Post
itemRouter.post('/', async (req, res) => {
    const items = await loadPostsCollection();
    await items.insertOne({
        name: req.body.name,
        type: req.body.type,
        using: req.body.using,
        value: req.body.value,
        img_address:req.body.img_address,
        price: req.body.price,
        sell_price:req.body.sell_price

    });
    res.status(201).send();
});


// Delete Post
itemRouter.delete('/:id', async (req, res) => {
    const items = await loadPostsCollection();
    await items.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
});


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        //heslo je: 'frameworkvuejs'
        'mongodb+srv://lukas-dufek:frameworkvuejs@cluster0.glcymo1.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true
        }
    );

    return client.db('Cluster0').collection('items');
}

module.exports = itemRouter;
