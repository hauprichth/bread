const router = require('express').Router()
const Bread = require('../models/bread')

//GET: all of the bread
router.get('/', (req, res) => {
    res.send(Bread)
})
//GET: get a bread from the database by its index
router.get('/:index', (req,res) => {
    const { index } = req.params
    res.send(Bread[index])
})
module.exports = router