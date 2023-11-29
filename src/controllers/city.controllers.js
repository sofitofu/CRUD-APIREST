const catchError = require('../utils/catchError');
const City = require('../models/City');

const getAll = catchError(async(req, res) => {
    const cities = await City.findAll()
    return res.json(cities)
});

const create = catchError(async(req, res) => {
    const {nombre } = req.body
    const city = await City.create(req.body)
    return res.json(city)
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const city = await City.findByPk(id)
    return res.json(city)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params
    const city = await City.destroy({where: {id}})
    return res.sendStatus(204)
})

const update = catchError(async(req, res) =>{
    const {id} = req.params
    const {nombre} = req.body
    const city = await City.update(
        {nombre},
        {where: {id}, returning: true}
    )
    return res.status(201).json(city[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}