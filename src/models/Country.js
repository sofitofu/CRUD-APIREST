const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Country = sequelize.define('paises', {
    // Definimos las columnas aquí
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
}, {
    // Deshabilitar timestamps
    timestamps: false,
  });




module.exports = Country;