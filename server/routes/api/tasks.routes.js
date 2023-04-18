const Router  = require('express')
const Task = require('../../models/Task')


const TaskRouter = Router()

TaskRouter.get('/', async (req, res) => {

    try {
        const tasks = await Task.find()
        if (!tasks) throw new Error('No Items')
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


})

TaskRouter.post('/', async (req, res) => {

    const newTask = new Task(req.body)
    try {
        const task = await newTask.save()
        if (!task) throw new Error('Something went wrong saving the item')
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

TaskRouter.put('/:id', async (req, res) => {

    const { id } = req.params

    try {
        const response = await Task.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

TaskRouter.delete('/:id', async (req, res) => {

    const { id } = req.params
    try {
        const removed = await Task.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = TaskRouter;
