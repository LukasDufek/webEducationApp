const Router  = require('express')
const Item = require('../../models/Item')

const ItemRouter = Router()

ItemRouter.get('/', async (req, res) => {

    try {
        const Items = await Item.find();
        if (!Items) throw new Error('No Items')
        res.status(200).json(Items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})


ItemRouter.post('/', async (req, res) => {

    const newItem = new Item(req.body)
    try {
        const item = await newItem.save()
        if (!item) throw new Error('Something went wrong saving the item')
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

ItemRouter.put('/:id', async (req, res) => {

    const { id } = req.params

    try {
        const response = await Item.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

ItemRouter.delete('/:id', async (req, res) => {

    const { id } = req.params
    try {
        const removed = await Item.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = ItemRouter;
