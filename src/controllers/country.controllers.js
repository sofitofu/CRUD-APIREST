const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const countries = await Country.findAll()
    return res.json(countries)
});

const create = catchError(async(req, res) => {
    const {nombre, capital} = req.body
    const country = await Country.create({
        nombre,
        capital
    })
    return res.json(country)
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const country = await Country.findByPk(id)
    return res.json(country)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params
    const country = await Country.destroy({where: {id}})
    return res.sendStatus(204)
})

const update = catchError(async(req, res) =>{
    const {id} = req.params
    const {nombre, capital} = req.body
    const country = await Country.update(
        {nombre, capital},
        {where: {id}, returning: true}
    )
    return res.status(201).json(country[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}