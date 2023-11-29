const cityRouter = require('./city.routers')
const countryRouter = require('./country.router') // la importamos
const express = require('express');
const router = express.Router();

// colocar tus rutas aquí
router.use("/api/countries", countryRouter); // la ejecutamos
router.use("/api/cities", cityRouter); // la ejecutamos

module.exports = router;